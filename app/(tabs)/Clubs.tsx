import PostList from "@/components/Post/PostList";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ActivityIndicator, Platform } from "react-native";

const Club = () => {
    const router = useRouter();
    const [followedClub, setFollowedClub] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        GetPosts();
    }, []);

    const GetPosts = async () => {
        setLoading(true);
        try {
            const result = await axios.get('http://192.168.205.77:8082/post?club=1,2,3&orderField=post.id');
            setFollowedClub(result?.data || []);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
            
            <View style={styles.headerSpacer} />
            <View style={styles.header}>
                <Text style={styles.headerText}>CLUBS</Text>
                <TouchableOpacity style={styles.exploreButton} onPress={() => router.push('/exploreClubs')}>
                    <Text style={styles.exploreButtonText}>Explore Clubs</Text>
                </TouchableOpacity>
            </View>


            {loading ? (
                <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
            ) : followedClub.length === 0 ? (
                <View style={styles.noClubContainer}>
                    <Image source={require("../../assets/images/no-club.png")} style={styles.noClubImage} />
                    <Text style={styles.noClubText}>No Club Joined</Text>
                    <Text style={styles.description}>
                        You haven't joined any club yet. Explore and become part of amazing communities!
                    </Text>
                    <TouchableOpacity style={styles.joinButton} onPress={() => router.push('/exploreClubs')}>
                        <Text style={styles.joinButtonText}>Join a Club</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.postListContainer}>
                    <PostList posts={followedClub} loading={loading} onRefresh={GetPosts} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
    },
    headerSpacer: {
        height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
        backgroundColor: "#fff",
        paddingVertical: 15,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    },
    exploreButton: {
        backgroundColor: "#007bff",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    exploreButtonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
    },
    loader: {
        marginTop: 50,
    },
    noClubContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    noClubImage: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginBottom: 20,
    },
    noClubText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    joinButton: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        elevation: 3,
    },
    joinButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    },
    postListContainer: {
        flex: 1,
    },
});

export default Club;
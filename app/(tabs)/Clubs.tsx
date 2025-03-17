import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from "react-native";

const Club = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

            <Image source={require(".././../assets/images/no-club.png")} style={styles.noClubImage} />

            <Text style={styles.noClubText}>No Club Joined</Text>
            <Text style={styles.description}>
                You haven't joined any club yet. Explore and become part of amazing communities!
            </Text>

            <TouchableOpacity style={styles.joinButton} onPress={() => console.log("Navigate to Join Club")}>
                <Text style={styles.joinButtonText}>Join a Club</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
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
});

export default Club;

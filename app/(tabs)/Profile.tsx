import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { AuthContext } from "@/context/AuthContext";  // Ensure you have the AuthContext setup

const Profile = () => {
    const { user, logout } = useContext(AuthContext); // Get user details & logout function

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

            {/* Profile Header */}
            <View style={styles.profileHeader}>
                <Image source={{ uri: user?.image }} style={styles.profileImage} />
                <Text style={styles.userName}>{user?.name || "User Name"}</Text>
                <Text style={styles.userEmail}>{user?.email || "user@example.com"}</Text>
            </View>

            {/* Space between Image & Sections */}
            <View style={{ height: 20 }} />

            {/* Sections */}
            <TouchableOpacity style={styles.section} onPress={() => console.log("Navigate to My Posts")}>
                <Ionicons name="document-text-outline" size={24} color="#007bff" />
                <Text style={styles.sectionText}>My Posts</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.section} onPress={() => console.log("Navigate to Security & Privacy")}>
                <MaterialIcons name="security" size={24} color="#28a745" />
                <Text style={styles.sectionText}>Security & Privacy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.section} onPress={() => console.log("Invite Friends")}>
                <FontAwesome name="users" size={24} color="#ff9800" />
                <Text style={styles.sectionText}>Invite Friends</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.section} onPress={() => console.log("Help & Support")}>
                <Ionicons name="help-circle-outline" size={24} color="#dc3545" />
                <Text style={styles.sectionText}>Help & Support</Text>
            </TouchableOpacity>

            {/* Logout Button */}
            <TouchableOpacity style={[styles.section, styles.logoutButton]} onPress={logout}>
                <MaterialIcons name="logout" size={24} color="#fff" />
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        paddingHorizontal: 20,
        paddingTop: StatusBar.currentHeight || 20, // Fix for status bar overlap
    },
    profileHeader: {
        alignItems: "center",
        paddingVertical: 30,
        backgroundColor: "#fff",
        marginBottom: 15,
        borderRadius: 15,
        elevation: 5,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15, // More space after the profile image
    },
    userName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    userEmail: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
        elevation: 3,
    },
    sectionText: {
        fontSize: 16,
        marginLeft: 15,
        color: "#333",
        fontWeight: "500",
    },
    logoutButton: {
        backgroundColor: "#dc3545",
        justifyContent: "center",
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 15,
    },
});

export default Profile;

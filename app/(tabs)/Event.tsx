import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, StatusBar } from "react-native";

const eventsData = [
    { id: "1", name: "GCET PREMIER LEAGUE 2025", description: "We are thrilled to welcome you to the most awaited and anticipated event of our college! This cricket tournament promises to deliver an electrifying sporting experience for all participants and spectators.", image: require("../../assets/images/event1.jpg") },
    { id: "2", name: "Missing Out Feels Worse Than Regretting!", description: "At IEEE GCET SB, you dont just join a club — you join a community where tech enthusiasts turn ideas into reality.Whether youre a coder, a creator, or just curious to explore", image: require("../../assets/images/event2.jpg") },
    { id: "3", name: "Musical Morning", description: "GCET has a unique tradition of organizing Musical Morning during the annual day celebrations. This year also we are following the same trend. The auditions for the solo and group singing are scheduled as per the details mentioned in the poster.", image: require("../../assets/images/event3.jpg") },
    { id: "4", name: "Campus to Corporate", description: "This insightful session will help students and aspiring professionals understand the transition from academia to the corporate world, the skills required to thrive in dynamic work environments, and the role of strategic HR leadership in career growth.", image: require("../../assets/images/event4.jpg") },
];

const Events = () => {
    const [registeredEvents, setRegisteredEvents] = useState<{ [key: string]: boolean }>({});

    const toggleRegistration = (id: string) => {
        setRegisteredEvents((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const renderItem = ({ item }: { item: { id: string; name: string; description: string; image: any } }) => (
        <View style={styles.eventBox}>
            <Image source={item.image} style={styles.eventImage} />
            <Text style={styles.eventTitle}>{item.name}</Text>
            <Text style={styles.eventDescription}>{item.description}</Text>

            {registeredEvents[item.id] ? (
                <TouchableOpacity style={styles.unregisterButton} onPress={() => toggleRegistration(item.id)}>
                    <Text style={styles.buttonText}>Unregister</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.registerButton} onPress={() => toggleRegistration(item.id)}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton} onPress={() => alert("Sharing event...")}>
                        <Text style={styles.buttonText}>Share</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Events</Text>
            </View>
            <FlatList data={eventsData} renderItem={renderItem} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        paddingHorizontal: 10,
        paddingTop: StatusBar.currentHeight || 10, // Avoid content under status bar
    },
    header: {
        backgroundColor: "#fff",
        paddingVertical: 15,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        marginBottom: 10,
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    },
    eventBox: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignItems: "center",
    },
    eventImage: {
        width: "100%",
        height: 180,
        borderRadius: 10,
        marginBottom: 10,
    },
    eventTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    eventDescription: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10,
    },
    registerButton: {
        backgroundColor: "#2a9d8f",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        flex: 1,
        marginRight: 5,
        alignItems: "center",
    },
    shareButton: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        flex: 1,
        marginLeft: 5,
        alignItems: "center",
    },
    unregisterButton: {
        backgroundColor: "#d9534f",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 10,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    },
});

export default Events;

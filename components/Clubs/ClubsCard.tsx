import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

type CLUB = {
    id: number,
    name: string,
    club_logo: string,
    about: string,
    createdon: string
}

export default function ClubsCard(club: CLUB) {

    const onFollowBtn = () => {
        console.log(`Follow button clicked for ${club.name}`);
    };

    return (
        <View style={styles.card}>
            <Image source={{ uri: club.club_logo }} style={styles.clubLogo} />
            <Text style={styles.clubName}>{club.name}</Text>
            <Text numberOfLines={2} style={styles.clubAbout}>{club.about}</Text>

            <TouchableOpacity style={styles.followButton} onPress={onFollowBtn}>
                <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    clubLogo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    clubName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    clubAbout: {
        fontSize: 14,
        color: '#6c757d',
        textAlign: 'center',
        marginBottom: 10,
    },
    followButton: {
        backgroundColor: '#28a745',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    followButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

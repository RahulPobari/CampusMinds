import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import axios from 'axios'

type CLUB = {
    id: number,
    name: string,
    club_logo: string,
    about: string,
    createdon: string,
    isFollowed: boolean,
    refreshData: () => void
}

export default function ClubsCard(club: CLUB) {

    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const onFollowBtn = async () => {
        setLoading(true);
        if (club.isFollowed) {
            const result = await axios.delete('http://192.168.205.77:8082/clubfollower?u_email=' + user.email + '&club_id=' + club.id);
        }

        else {
            const result = await axios.post('http://192.168.205.77:8082/clubfollower', {
                u_email: user?.email,
                clubId: club?.id
            });
        }

        club.refreshData()
        setLoading(false);
    };

    return (
        <View style={styles.card}>
            <Image source={{ uri: club.club_logo }} style={styles.clubLogo} />
            <Text style={styles.clubName}>{club.name}</Text>
            <Text numberOfLines={2} style={styles.clubAbout}>{club.about}</Text>

            <TouchableOpacity
                style={[
                    styles.followButton,
                    loading ? styles.followButtonLoading :
                        club.isFollowed ? styles.followButtonUnfollow : styles.followButtonFollow
                ]}
                onPress={onFollowBtn}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.followButtonText}>
                        {club.isFollowed ? 'Unfollow' : 'Follow'}
                    </Text>
                )}
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
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    followButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    followButtonLoading: {
        backgroundColor: '#6c757d',
    },
    followButtonFollow: {
        backgroundColor: '#28a745',
    },
    followButtonUnfollow: {
        backgroundColor: '#dc3545',
    },
});

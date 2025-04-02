import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import ClubsCard from '@/components/Clubs/ClubsCard'
import { AuthContext } from '@/context/AuthContext'

export type CLUB = {
    id: number,
    name: string,
    club_logo: string,
    about: string,
    createdon: string,
    isFollowed: boolean
}

export default function exploreClubs() {

    const [clubList, setClubList] = useState<CLUB[]>([]);
    const { user } = useContext(AuthContext);
    const [followedClub, setFollowedClub] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        GetAllClubs();
    }, []);

    const GetAllClubs = async () => {
        setLoading(true);
        try {
            const result = await axios.get('http://192.168.205.77:8082/clubs');
            setClubList(result.data);
            GetUserFollowedClubs();
        } catch (error) {
            console.error('Error fetching clubs:', error);
        }
        setLoading(false);
    };

    const GetUserFollowedClubs = async () => {
        const result = await axios.get('http://192.168.205.77:8082/clubfollower?u_email=' + user?.email);
        // console.log(result.data);
        setFollowedClub(result.data);
    }

    const onAddClubBtn = () => {
        console.log("Add Club button pressed");
    };

    const isFollowed = (clubId: number) => {
        const record = followedClub && followedClub?.find((item: any) => item.club_id == clubId);
        return record ? true : false;
    }

    return (
        <View style={styles.container}>
            <View style={styles.addClubContainer}>
                <Text style={styles.addClubText}>Create New Teams / Clubs</Text>
                <TouchableOpacity style={styles.addButton} onPress={onAddClubBtn}>
                    <Text style={styles.addButtonText}>+ Add</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={clubList}
                numColumns={2}
                onRefresh={GetAllClubs}
                refreshing={loading}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ClubsCard {...item} isFollowed={isFollowed(item.id)}
                        refreshData={GetAllClubs}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    addClubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    addClubText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#6c757d',
    },
    addButton: {
        backgroundColor: '#007bff',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import Colors from '@/data/Colors';
import { AuthContext } from '@/context/AuthContext';

export default function Header() {
    const { user } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Hello {user?.name || 'User'}!</Text>
                <Text style={styles.subtitle}>CVM University</Text>
            </View>

            <Image
                source={{ uri: user?.image || 'https://via.placeholder.com/45' }}
                style={styles.profileImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    greeting: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.PRIMARY,
    },
    subtitle: {
        fontSize: 16,
        color: Colors.GRAY,
        marginTop: 2,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.PRIMARY,
    },
});

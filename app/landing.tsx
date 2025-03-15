import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '@/data/Colors';
import Button from '@/components/Shared/Button';
import { useRouter } from 'expo-router';

export default function LandingScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image
                source={require('./../assets/images/CampusMinds.png')}
                style={styles.image}
                resizeMode="contain"
            />

            <View style={styles.content}>
                <Text style={styles.title}>Welcome To CampusMinds</Text>

                <Text style={styles.description}>
                    A platform for college students to share ideas, join clubs, 
                    register for events, and stay updated with daily college 
                    announcements. Connect, collaborate, and make the most of your campus life!
                </Text>

                <Button text="Get Started" onPress={() => router.push('/(auth)/SignUp')} />

                <Pressable onPress={() => router.push('/(auth)/SignIn')}>
                    <Text style={styles.signInText}>
                        Already have an account? <Text style={styles.signInLink}>Sign In Here</Text>
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginTop: 40,
        width: '100%',
        height: 400,
    },
    content: {
        padding: 20,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 15,
        color: Colors.GRAY,
        marginBottom: 40,
        paddingHorizontal: 10,
    },
    signInText: {
        fontSize: 16,
        color: Colors.GRAY,
        textAlign: 'center',
        marginTop: 10,
    },
    signInLink: {
        fontWeight: 'bold',
        color: Colors.PRIMARY, // Assuming a primary color exists in Colors.js
    },
});

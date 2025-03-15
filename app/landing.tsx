import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'
import Button from '@/components/Shared/Button'
import { useRouter } from 'expo-router'


export default function LandingScreen() {
    const router = useRouter();
    return (
        <View style={{ backgroundColor: 'white', flex: 1}}>
            <Image source={require('./../assets/images/CampusMinds.png')}
                style={{
                    marginTop: 38,
                    width: '100%',
                    height: 500
                }}
            />
            <View style={{
                padding: 20,
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}
                >Welcome To CampusMinds </Text>

                <Text style={{
                    fontSize: 18,
                    textAlign: 'center',
                    marginTop: 15,
                    color: Colors.GRAY,
                    marginBottom: 50,
                }}>
                    A platform for college students to share ideas, join clubs, register for events, and stay updated with daily college announcements. Connect, collaborate, and make the most of your campus life!
                </Text>

               <Button text='Get Started' 
               onPress={() => router.push('/(auth)/SignUp')}/>

                <Pressable onPress={() => router.push('/(auth)/SignIn')}>
                <Text style={{
                    fontSize: 16,
                    color: Colors.GRAY,
                    textAlign: 'center',
                    marginTop: 7,
                }}>
                    Already have an account? Sign In Here
                </Text>
                </Pressable>
            </View>
        </View>
    )
}
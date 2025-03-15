import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'
import Button from '@/components/Shared/Button'


export default function LandingScreen() {
    return (
        <View style={{ backgroundColor: 'white', flex: 1}}>
            <Image source={require('./../assets/images/CampusMinds.png')}
                style={{
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
                }}>
                    A platform for college students to share ideas, join clubs, register for events, and stay updated with daily college announcements. Connect, collaborate, and make the most of your campus life!
                </Text>

               <Button text='Get Started' onPress={() => console.log('button pressed')}/>

                <Text style={{
                    fontSize: 16,
                    color: Colors.GRAY,
                    textAlign: 'center',
                    marginTop: 7,
                }}>
                    Already have an account? Sign In Here
                </Text>
            </View>
        </View>
    )
}
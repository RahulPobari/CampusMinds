import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import Colors from '@/data/Colors'
import { AuthContext } from '@/context/AuthContext'

export default function Header() {

    const { user } = useContext(AuthContext);
    return (
        <View style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <View>
                <Text
                    style={{
                        fontSize: 25,
                        color: Colors.PRIMARY,
                        fontWeight: 'bold',
                    }}
                >Hello YOU!</Text>
                <Text style={{ fontSize: 18, color: Colors.GRAY }}>CVM University</Text>
            </View>

            <Image source={{uri: user?.image}} style={{
                width: 45,
                height: 45,
                borderRadius: 99,
            }} />
        </View>
    )
}
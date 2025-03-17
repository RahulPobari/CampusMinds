import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/data/Colors';

export default function LatestPost() {

    const [selectedTab, setSelectedTab] = useState(0);

    const GetPosts=()=>{
        //fetch data from DB
    }

    return (
        <View style={{ marginTop: 15 }}>

            <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <Pressable onPress={()=>setSelectedTab(0)}>
                    <Text style={[style.tabtext, 
                        { backgroundColor: selectedTab == 0 ? Colors.PRIMARY : Colors.WHITE },
                        { color: selectedTab == 0 ? Colors.WHITE : Colors.PRIMARY }
                        ]}>Latest</Text>
                </Pressable>
                <Pressable onPress={()=>setSelectedTab(1)}>
                    <Text style={[style.tabtext,{
                        backgroundColor: selectedTab == 1 ? Colors.PRIMARY : Colors.WHITE,
                        color: selectedTab == 1 ? Colors.WHITE : Colors.PRIMARY
                    }]}>Trending</Text>
                </Pressable>
            </View>



        </View>
    )
}

const style = StyleSheet.create({
    tabtext: {
        padding: 10,
        fontSize: 20,
        paddingHorizontal: 15,
        borderRadius: 99,
    }
})
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import UserAvatar from './UserAvatar'
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '@/data/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function PostCard({ post }: any) {
  return (
    <View style={{
      padding: 15,
      backgroundColor: '#fff',
      borderRadius: 15,
      marginTop: 10,
    }}>
      <UserAvatar name={post?.name} image={post?.image} date={post?.createdon} />
      <Text>{post?.conetnt}</Text>

      {
        post?.imageurl &&
        <Image source={{ uri: post?.imageurl }} style={{
          width: '100%',
          height: 400,
          resizeMode: 'cover',
          objectFit: 'cover',
          borderRadius: 15,
        }}
        />
      }
      <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center'}}>
        <View style={styles.subcontainer}>
          <AntDesign name="like2" size={30} color="black" />
          <Text style={{fontSize: 17, color: Colors.GRAY}}>93</Text>
        </View>
        <View style={styles.subcontainer}>
        <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
          <Text style={{fontSize: 17, color: Colors.GRAY}}>19</Text>
        </View>
      </View>
      <Text style={{marginTop: 7, color: Colors.GRAY}}>View all Comments</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subcontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,

  }
})
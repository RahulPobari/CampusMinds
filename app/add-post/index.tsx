import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import UserAvatar from '@/components/Post/UserAvatar'
import { AuthContext } from '@/context/AuthContext'
import WritePost from '@/components/Post/WritePost';

export default function AddPost() {

    const {user} = useContext(AuthContext);

  return (
    <View style={{padding: 20, backgroundColor: '#f8f9fa', display:'flex', flex: 1}}>
      <UserAvatar name={user?.name} image={user?.image} date='Now'/>
      <WritePost />
    </View>
  )
}
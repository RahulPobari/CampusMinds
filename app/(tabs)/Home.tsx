import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext';
import Header from '@/components/Home/Header';
import Category from '@/components/Home/Category';
import LatestPost from '@/components/Post/LatestPost';

export default function Home() {
  return (
    <FlatList
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <View style={{
          // padding: 10,
          paddingTop: 40,
          backgroundColor: '#f8f9fa',
          flex: 1,
          padding: 15,
        }}>
          {/* Header */}
          <Header />

          {/* Category */}
          <Category />

          {/* Latest Post */}
          <LatestPost />

        </View>

      } />

  )

}
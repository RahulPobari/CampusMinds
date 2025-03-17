import { View, Text, FlatList } from 'react-native'
import React from 'react'
import PostCard from './PostCard'

export default function PostList({ posts,OnRefresh,loading }: any) {
    return (
        <View>
            <FlatList
                data={posts}
                onRefresh={OnRefresh}
                refreshing={loading}

                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <PostCard post={item} />
                )}
            />
        </View>
    )
}
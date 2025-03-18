import { View, FlatList } from "react-native";
import React from "react";
import PostCard from "./PostCard";

export default function PostList({ posts, OnRefresh, loading }: any) {
  return (
    <View>
      <FlatList
        data={posts}

        keyExtractor={(item, index) => item?.id ? `post-${item.id}` : `fallback-${index}`}

        onRefresh={OnRefresh}
        refreshing={loading}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </View>
  );
}

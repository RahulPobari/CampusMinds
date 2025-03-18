import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

// Function to format the date properly
const formatDate = (dateString: string) => {
  if (!dateString) return "Just now"; // Fallback for missing date
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid date"; // Handle incorrect date format
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }); // Example: "Fri, 15 Mar 2024"
};

export default function PostCard({ post }: { post?: any }) {
  // Mock Data if no post is passed
  const defaultPost = {
    name: "John Doe",
    createdon: "2024-03-15T10:30:00Z", // ISO format date
    image: "https://via.placeholder.com/50",
    imageurl: "https://via.placeholder.com/300",
    content: "This is a sample post content to preview the UI.",
    likes: 120,
    comments: 45,
  };

  const postData = post || defaultPost; // Use provided post or default

  return (
    <View style={styles.cardContainer}>
      {/* User Info Section */}
      <View style={styles.userContainer}>
        <Image source={{ uri: postData.image }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{postData.name}</Text>
          <Text style={styles.postDate}>{formatDate(postData.createdon)}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={22} color="#777" />
        </TouchableOpacity>
      </View>

      {/* Post Content */}
      <Text style={styles.postText}>{postData.conetnt}</Text>

      {/* Post Image */}
      {postData.imageurl && (
        <Image source={{ uri: postData.imageurl }} style={styles.postImage} />
      )}

      {/* Actions (Like, Comment, Share) */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <AntDesign name="like2" size={22} color="#777" />
          <Text style={styles.actionText}>{postData.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="comment-text-outline" size={22} color="#777" />
          <Text style={styles.actionText}>{postData.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-social-outline" size={22} color="#777" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* View Comments */}
      <TouchableOpacity>
        <Text style={styles.viewComments}>View all Comments</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    flexDirection: "column",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  postDate: {
    fontSize: 12,
    color: "#777",
  },
  postText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 15,
    marginBottom: 10,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  actionText: {
    fontSize: 14,
    color: "#777",
  },
  viewComments: {
    marginTop: 10,
    color: "#007bff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

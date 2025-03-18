import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '@/data/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

type USER_AVATAR = {
  name: string;
  image: string;
  date: string;
};

export default function UserAvatar({ name, image, date }: USER_AVATAR) {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={{ uri: image }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Ionicons name="ellipsis-vertical" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginVertical: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: Colors.GRAY,
  },
});

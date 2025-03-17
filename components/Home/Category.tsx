import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '@/data/Colors';
import { useRouter } from 'expo-router';

export default function Category() {
    const router = useRouter();
    const categoryOptions = [
        {
            name: 'Upcoming Events',
            banner: require('./../../assets/images/event.png'),
            path: '/(tabs)/Event',
        },
        {
            name: 'Latest Post',
            banner: require('./../../assets/images/news.png'),
            path: '/(tabs)/Home',
        },
        {
            name: 'Clubs',
            banner: require('./../../assets/images/clubs.png'),
            path: '/(tabs)/Clubs',
        },
        {
            name: 'Add New Post',
            banner: require('./../../assets/images/post.png'),
            path: 'add-post',
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={categoryOptions}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        //@ts-ignore
                        onPress={() => router.push(item.path)}
                        style={styles.cardContainer}
                    >
                        <Image source={item.banner} style={styles.bannerImage} />
                        <View style={styles.overlay} />
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const CARD_WIDTH = Dimensions.get('screen').width * 0.43;

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        width: CARD_WIDTH,
        height: 120,
        margin: 8,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: Colors.WHITE,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    text: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        fontSize: 18,
        color: Colors.WHITE,
        fontWeight: '600',
    },
});

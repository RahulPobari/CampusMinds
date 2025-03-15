import { 
    View, Text, SafeAreaView, StatusBar, StyleSheet, 
    Image, TouchableOpacity, ScrollView 
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/data/Colors';
import TextInputField from '@/components/Shared/TextInputField';
import Button from '@/components/Shared/Button';
import * as ImagePicker from 'expo-image-picker';

export default function SignUp() {
    const [profileImage, setProfileImage] = useState<string | undefined>();
    const [fullName, setFullName] = useState<string | undefined>();
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();

    const onBtnPress = () => {
        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Password:", password);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, 
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.heading}>Create New Account</Text>

                {/* Profile Image Picker */}
                <View style={styles.profileContainer}>
                    <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
                        <Image 
                            source={profileImage ? { uri: profileImage } : require('./../../assets/images/profile.png')}
                            style={styles.profileImage} 
                        />
                        <Ionicons name="camera" size={24} color={Colors.PRIMARY} style={styles.cameraIcon} />
                    </TouchableOpacity>
                </View>

                {/* Input Fields */}
                <TextInputField label="Full Name" onChangeText={setFullName} />
                <TextInputField label="College Email" onChangeText={setEmail} />
                <TextInputField label="Password" password={true} onChangeText={setPassword} />

                {/* Create Account Button */}
                <Button text="Create Account" onPress={onBtnPress} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollView: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 60,
        alignItems: 'center',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    imageWrapper: {
        position: 'relative',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: Colors.PRIMARY,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 2,
    },
});


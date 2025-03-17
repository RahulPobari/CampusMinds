import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../Shared/Button';
import * as ImagePicker from 'expo-image-picker';

export default function WritePost() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Public', value: 'Public' },
        { label: 'Developer', value: 'Developer' },
    ]);

    const onPostBtn = () => {
        // Post button functionality
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.postContainer}>
            <TextInput
                placeholder='Write your post here..'
                style={styles.textInput}
                multiline
                numberOfLines={5}
                maxLength={1000}
            />

            <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                {selectedImage ? (
                    <Image source={{ uri: selectedImage }} style={styles.image} />
                ) : (
                    <Image source={require('./../../assets/images/image.png')} style={styles.image} />
                )}
            </TouchableOpacity>

            <DropDownPicker
                items={items}
                open={open}
                value={value}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
            />

            <Button text='Post' onPress={onPostBtn} />
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        marginTop: 15,
    },
    textInput: {
        padding: 15,
        backgroundColor: '#fff',
        height: 140,
        marginTop: 10,
        borderRadius: 15,
        textAlignVertical: 'top',
        elevation: 3,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    imagePicker: {
        // alignItems: 'center',
        marginTop: 15,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: '#ccc',
    },
    dropdown: {
        borderWidth: 0,
        elevation: 2,
        marginTop: 15,
    },
    dropdownContainer: {
        borderWidth: 0,
        elevation: 2,
    },
    postButton: {
        marginTop: 20,
        backgroundColor: '#28a745',
        borderRadius: 10,
    },
});

import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

type TextInputFieldProps = {
    label: string;
    onChangeText: (text: string) => void;
    password ?: boolean
};

export default function TextInputField({ label, onChangeText,password }: TextInputFieldProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={label}
                onChangeText={onChangeText}
                style={styles.input}
                placeholderTextColor="#999"
                secureTextEntry={password}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        width: '100%',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#f8f9fa',
        color: '#333',
    },
});

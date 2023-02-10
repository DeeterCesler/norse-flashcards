import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageBox = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/f.png')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '80%',
        height: '80%',
    },
});

export default ImageBox;

import React from 'react';
import {StyleSheet, View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles'
import { Albumtype } from '../../types'
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
    album: Albumtype
}

// const Album = (props: AlbumProps) => {
//     <View style = {styles.container}>
//         <Image source={{ uri: props.album.imageUri }} style={styles.image}/>
//         <Text style={styles.text}>{props.album.artistHeadLine}</Text>
//     </View>
// }

export default function Album (props: AlbumProps){

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('AlbumScreen')
    }

    return(
        
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: props.album.imageUri }} style={styles.image}/>
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>
                </View>
        </TouchableWithoutFeedback> 
    );
}

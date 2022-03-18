import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {Albumtype} from "../../types";
import styles from "../AlbumHeader/styles"

export type AlbumHeaderProps = {
    album: Albumtype;
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.album.imageUri}} style={styles.image}/>
            <Text style={styles.name}>{props.album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {props.album.by}</Text>
                <Text style={styles.likes}>{props.album.numberOfLikes} Likes</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader;
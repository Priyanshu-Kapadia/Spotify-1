import React from "react";
import { FlatList, Text, View } from "react-native";
import { Albumtype } from "../../types";
import Album from "../Album";
import styles from './styles'

export type AlbumCategoryProps = {
    title: string,
    albums: [Albumtype],
}

export default function AlbumCategory (props: AlbumCategoryProps){
    return(
        <View style={styles.container}>
           <Text style={styles.title}>{props.title}</Text>
            <FlatList 
                data={props.albums}
                renderItem={({ item }) => <Album album={item}/>}
                keyExtractor = {( item ) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}
import React, { useEffect } from 'react';
import { RootTabScreenProps } from '../types';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem/indes';
import AlbumHeader from '../components/AlbumHeader/index';

export default function AlbumScreen() {

    const route = useRoute();

    useEffect(() => {
       console.log(route)
    }, [])

   return (

   <View>
        <FlatList 
            data={albumDetails.songs}
            renderItem={({item}) => <SongListItem song={item} />}
            keyExtractor={(item) => item.id}
            ListHeaderComponent= {() => <AlbumHeader album={albumDetails} />}        
            />
    </View>
   );
}

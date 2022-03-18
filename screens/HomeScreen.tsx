import * as React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { RootTabScreenProps } from '../types';
import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';
import PlayerWidget from '../components/PlayerWidget/indes';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  return (
    <View style={styles.container}>
      <FlatList 
        data = {albumCategories}
        renderItem={({item}) => (
          <AlbumCategory 
            title={item.title}
            albums={item.albums} 
        />)}
        keyExtractor={(item) => item.id}
      />
      <PlayerWidget />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  'container:last-child': {
    marginBottom: 80, 
  }
});

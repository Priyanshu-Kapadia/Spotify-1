import  React, {useEffect, useState} from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio } from 'expo-av';

import styles from './styles';
import {Song} from "../../types";
import { Sound } from 'expo-av/build/Audio';

const song = {
  id: '1',
  uri: 'https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4',
  imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
  // imageUri: 'https://i.scdn.co/image/ab67616d00001e02f3c7e4934b8dd9eedf69e6e5',
  title: 'StarBoy',
  // title: 'Bella Ciao',
  artist: 'The Weekend',
  // artist: 'Manu Pilas'
}

const PlayerWidget = () => {

  const [sound, setSound] = useState<Sound | null> (null);
  const [isPlaying, setIsPlaying] = useState<Boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  }

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const {sound: newSound} = await Audio.Sound.createAsync(
      { uri: song.uri}, 
      { shouldPlay: isPlaying},
      onPlaybackStatusUpdate,
    )
    setSound(newSound)
  }

  useEffect(() => {
    playCurrentSong();
  }, [])

  const onPlayPausePress = async () => {
    if(!sound) {
      return;
    }
    if(isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  }

  const getProgress = () => {
    if(sound === null || duration === null || position === null ) {
      return 0;
    }
    else{
      return (position / duration) * 100;
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.progress,{ width: `${getProgress()}%`}]} />
      <View style={styles.row}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>
          <View style={styles.iconsContainer}>
            <AntDesign name="hearto" size={22} color={"white"}/>
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome name={isPlaying ? 'pause' : 'play'} size={22} color={"white"}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default PlayerWidget;

function source(source: any): { sound: any; } {
  throw new Error('Function not implemented.');
}
function initialStatus(source: (source: any) => { sound: any; }, arg1: {}, initialStatus: any): { sound: any; } {
  throw new Error('Function not implemented.');
}


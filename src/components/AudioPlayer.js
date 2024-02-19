import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Sound from 'react-native-sound';
import {BaseIcon} from './BaseIcon';
import icons from '../constants/icons';
import {COLORS} from '../constants/theme';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundInstance, setSoundInstance] = useState(null);

  const playSound = () => {
    const sound = new Sound(require('../assets/voice/1.mp3'), error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      setSoundInstance(sound);
      setIsPlaying(true);
      sound.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
        setIsPlaying(false);
      });
    });
  };

  // const stopSound = () => {
  //   if (soundInstance) {
  //     soundInstance.stop(() => {
  //       console.log('sound stopped');
  //       setIsPlaying(false);
  //     });
  //   }
  // };

  return (
    <View>
      <TouchableOpacity onPress={playSound}>
        <BaseIcon
          icon={isPlaying ? icons.pause : icons.play}
          color={COLORS.white}
          size={50}
        />
      </TouchableOpacity>
    </View>
  );
};

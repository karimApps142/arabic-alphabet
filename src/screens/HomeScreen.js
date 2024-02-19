import React, {useState, useRef} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {SIZES} from '../constants/theme';
import icons from '../constants/icons';
import {BaseButton, BaseFlatList} from '../components';
import helper from '../constants/helper';
import Sound from 'react-native-sound';

export const HomeScreen = () => {
  const [soundInstance, setSoundInstance] = useState(null);
  const flatListRef = useRef(null);

  const playSound = soundFilePath => {
    const sound = new Sound(soundFilePath, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }

      setSoundInstance(sound);
      sound.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={icons.background} />
      <Image source={icons.title} style={styles.title} />

      <BaseFlatList
        ref={flatListRef}
        data={helper.data}
        contentContainerStyle={styles.flatList}
        renderItem={({item}) => (
          <BaseButton
            onPress={() => playSound(item.sound)}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: SIZES.height,
    width: SIZES.width,
    alignItems: 'center',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    zIndex: -100,
    position: 'absolute',
  },
  title: {
    marginTop: 20,
  },
  flatList: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

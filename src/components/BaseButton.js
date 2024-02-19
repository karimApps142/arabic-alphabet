import React from 'react';
import {TouchableOpacity, Image, ImageBackground} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';

export const BaseButton = ({image, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: SIZES.width / 6,
        width: SIZES.width / 6,
        margin: 5,
      }}>
      <ImageBackground source={image} style={{height: '100%', width: '100%'}} />
    </TouchableOpacity>
  );
};

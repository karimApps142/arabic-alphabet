import React from 'react';
import {Stack} from './index';
import {HomeScreen} from '../screens';

export const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="HomeScreen">
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
);

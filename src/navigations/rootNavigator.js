import {DrawerActions} from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const nestedNavigate = (name, child, params) => {
  navigationRef.current?.navigate(name, {
    screen: child,
    params,
  });
};

const goBack = () =>
  navigationRef.current?.canGoBack() ? navigationRef.current?.goBack() : null;

const closeDrawer = () =>
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());

export default {
  navigate,
  goBack,
  closeDrawer,
  nestedNavigate,
};

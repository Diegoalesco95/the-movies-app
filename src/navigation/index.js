import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Header} from '../main/components/Header';
import HomeLayout from '../main/layouts/homeLayout';
import PlayerLayout from '../main/layouts/playerLayout';

const Stack = createStackNavigator();

export const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="float"
      mode="card"
      screenOptions={{
        header: () => {
          return <Header />;
        },
      }}>
      <Stack.Screen name="Home" component={HomeLayout} />
      <Stack.Screen
        name="Player"
        component={PlayerLayout}
        gestureEnabled={true}
      />
    </Stack.Navigator>
  );
};

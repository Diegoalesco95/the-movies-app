import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Header} from '../main/components/Header';
import HomeLayout from '../main/layouts/homeLayout';
import PlayerLayout from '../main/layouts/playerLayout';
import CategoryLayout from '../main/layouts/categoryLayout';
import {About} from '../main/layouts/aboutLayout';
import {Profile} from '../main/layouts/profileLayout';
import {Lucky} from '../main/layouts/luckyLayout';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Stack.Screen
        name="Categories"
        component={CategoryLayout}
        gestureEnabled={true}
      />
    </Stack.Navigator>
  );
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#0e151e',
        inactiveTintColor: '#a2b4bc',
      }}>
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Lucky"
        component={Lucky}
        options={{
          tabBarLabel: 'Voy a tener suerte',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Mi perfil',
          tabBarIcon: ({color, size}) => (
            <Icon name="account-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'Acerca de',
          tabBarIcon: ({color, size}) => (
            <Icon name="info" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

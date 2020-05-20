import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Header} from '../main/components/Header';
import HomeLayout from '../main/layouts/homeLayout';
import PlayerLayout from '../main/layouts/playerLayout';
import CategoryLayout from '../main/layouts/categoryLayout';
import {About} from '../main/layouts/aboutLayout';
import profileLayout from '../main/layouts/profileLayout';
import LuckyLayout from '../main/layouts/luckyLayout';
import Login from '../main/layouts/loginLayout';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {connect} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Main = () => {
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
      {/* <Stack.Screen name="Root" component={DrawerNavigator} /> */}
    </Stack.Navigator>
  );
};

const TabNavigator = ({isLogin}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#0e151e',
        inactiveTintColor: '#a2b4bc',
      }}>
      <Tab.Screen
        name="Home"
        component={isLogin ? DrawerNavigator : Login}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Lucky"
        component={isLogin ? LuckyLayout : Login}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={profileLayout}
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
      /> */}
    </Tab.Navigator>
  );
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="slide"
      drawerStyle={{width: 150, backgroundColor: '#f0f5f6'}}
      drawerContentOptions={{
        activeTintColor: '#f0f5f6',
        activeBackgroundColor: '#0e151e',
        itemStyle: {
          paddingHorizontal: 0,
          marginVertical: 0,
          marginHorizontal: 0,
          borderRadius: 0,
          borderBottomWidth: 0.5,
          borderBottomColor: 'rgba(0,0,0,.3)',
          borderTopWidth: 0.2,
          borderTopColor: 'rgba(255,255,255,0.3)',
        },
        labelStyle: {
          marginHorizontal: 0,
        },
        contentContainerStyle: {
          paddingTop: 0,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Main}
        options={{
          drawerLabel: 'Inicio',
          drawerIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={profileLayout}
        options={{
          drawerLabel: 'Perfil',
          drawerIcon: ({color, size}) => (
            <Icon name="account-circle" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerLabel: 'Acerca de',
          drawerIcon: ({color, size}) => (
            <Icon name="info" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    isLogin: state.isLogin,
  };
};

export default connect(mapStateToProps)(TabNavigator);

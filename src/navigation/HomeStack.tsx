import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@/screens/home/Home';
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      //   initialRouteName={getInitialRoute()}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;

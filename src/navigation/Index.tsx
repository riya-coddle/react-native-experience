import React, {useState} from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from '@/navigation/HomeStack';
import SplashScreen from 'react-native-splash-screen';
// import Splash from '@/screens/Splash/SplashScreen';
import {useSelector} from 'react-redux';
import {RootState} from '@/redux/store';
import AuthStackNavigator from '@/navigation/AuthStack';
import {View} from 'react-native';

export default function RootNavigator() {
  const {isLogged} = useSelector((state: RootState) => state?.auth);
  const [splashView, setSplashView] = useState(true);
  return (
    <NavigationContainer
      theme={DarkTheme}
      onReady={() => {
        setTimeout(() => {
          setSplashView(false);
          SplashScreen.hide();
        }, 4400);
      }}>
      <>
        {/* {splashView && <Splash />} */}
        {splashView && <View></View>}
        {!splashView &&
          (isLogged ? <HomeStackNavigator /> : <AuthStackNavigator />)}
      </>
    </NavigationContainer>
  );
}

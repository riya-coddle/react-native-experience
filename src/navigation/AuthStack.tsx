import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import OnboardScreen from '@/screens/Onboarding/OnboardingScreen';
import Login from '@/screens/login/Login';
import {deleteEntry} from '@/realm/helperRealm';
import {AuthInfo} from '@/realm/models';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '@/redux/slices/Auth';
import {useIsFocused} from '@react-navigation/native';
// import {RootState} from '@/redux/store';

const Stack = createStackNavigator();
const AuthStackNavigator = () => {
  const dispatch = useDispatch();
  const focus = useIsFocused();
  // const {alreadyOpened} = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    deleteEntry(AuthInfo, 'AuthInfo');
    dispatch(logOut());
  }, [dispatch, focus]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* {!alreadyOpened && (
        <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
      )} */}
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;

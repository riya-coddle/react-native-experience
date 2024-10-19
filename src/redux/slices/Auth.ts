import {createSlice} from '@reduxjs/toolkit';

export type AuthStateType = {
  isLogged: boolean;
  phoneNumber: string;
  accessToken: string;
  refreshToken: string;
  notification: {
    notificationId: number | undefined;
    category: string | undefined;
  };
  alreadyOpened: boolean;
  firstTimeLoggedIn: boolean;
  socialLoader: boolean;
};

const initialState: AuthStateType = {
  isLogged: false,
  phoneNumber: '',
  accessToken: '',
  refreshToken: '',
  notification: {notificationId: undefined, category: undefined},
  alreadyOpened: false,
  firstTimeLoggedIn: false,
  socialLoader: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    savePhoneNumber: (state: AuthStateType, {payload}) => {
      state.phoneNumber = payload;
    },
    updateTokens: (state: AuthStateType, {payload}) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    loginSuccess: (state: AuthStateType, {payload}) => {
      state.isLogged = true;
      state.accessToken = payload.accesToken;
      state.refreshToken = payload.refreshToken;
      state.phoneNumber = payload.phoneNumber
        ? payload.phoneNumber
        : state.phoneNumber;
      state.firstTimeLoggedIn = payload.firstTimeLoggedIn === '0';
    },
    logOut: (state: AuthStateType) => {
      state.isLogged = false;
      state.phoneNumber = '';
      state.accessToken = '';
      state.refreshToken = '';
    },
    setNotification: (state, {payload}) => {
      state.notification = payload;
    },
    clearNotification: state => {
      state.notification = {notificationId: undefined, category: undefined};
    },
    setAlreadyOpened: (state, {payload}) => {
      state.alreadyOpened = payload;
    },
    updateIsfirstTime: (state, {payload}) => {
      state.firstTimeLoggedIn = payload;
    },
    setSocialLoader: (state, {payload}) => {
      state.socialLoader = payload;
    },
  },
});

export const {
  savePhoneNumber,
  updateTokens,
  loginSuccess,
  logOut,
  setNotification,
  clearNotification,
  setAlreadyOpened,
  updateIsfirstTime,
  setSocialLoader,
} = authSlice.actions;

export default authSlice.reducer;

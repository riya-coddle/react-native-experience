import {configureStore} from '@reduxjs/toolkit';
import authSlice, {
  AuthStateType,
} from './slices/Auth';

export interface RootState {
  tournamentOptions: AuthStateType;
}

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

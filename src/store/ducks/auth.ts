/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createReducer,
  createAction,
} from '@reduxjs/toolkit';

import { RootState } from '..';
import { auth } from '../../api';

const setAccessToken = createAction<string>(`auth/setAccessToken`);
const signOut = createAction(`auth/signOut`);

const signIn = createAsyncThunk(
  `auth/signIn`,
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await auth.signIn(email, password);
      if (response.data.error) {
        throw new Error(response.data.message);
      }
      console.log(`response.data`, response.data);
      return response.data;
    } catch (err) {
      return err;
    }
  },
);

const resetPassword = createAsyncThunk(
  `auth/forgotPassword`,
  async ({
    userId,
    userData,
  }: {
    userId: string;
    userData: { email: string; password: string };
  }) => {
    try {
      const response = await auth.resetPassword(userId, userData);
      console.log(`response.data`, response.data);
      return response.data;
    } catch (err) {
      return err;
    }
  },
);

interface User {
  email: string;
  accessToken: string;
  id: string;
}

export const reducer = createReducer(
  {
    user: {} as User,
    signingInStatus: `idle`,
  },
  builder => {
    builder.addCase(setAccessToken, (state, action) => {
      state.user.accessToken = action.payload;
    });

    builder
      .addCase(signIn.pending, state => {
        state.signingInStatus = `pending`;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.signingInStatus = `fulfilled`;
      })
      .addCase(signIn.rejected, state => {
        state.signingInStatus = `rejected`;
      });

    builder.addCase(signOut, state => {
      state.user.accessToken = ``;
    });
  },
);

export const actions = {
  signIn,
  signOut,
  setAccessToken,
  resetPassword,
};

export const selectors = {
  selectAccessToken: (state: RootState) => state.auth.user.accessToken,
  selectUserData: (state: RootState) => state.auth.user,
};

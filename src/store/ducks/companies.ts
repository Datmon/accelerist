/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createReducer,
  createAction,
} from '@reduxjs/toolkit';

import { RootState } from '..';
import { companies, saved } from '../../api';

const getFavorites = createAsyncThunk(
  `companies/getFavorites`,
  async ({ pages, limit }: { pages: number; limit: number }) => {
    try {
      const response = await companies.getFavorites(pages, limit);
      if (response.data.error) {
        throw new Error(response.data.message);
      }
      console.log(`response.data`, response.data);
      return response.data.items;
    } catch (err) {
      return err;
    }
  },
);

interface Author {
  firstName: string;
  id: string;
  lastName: string;
  role: string;
}

interface Companies {
  name: string;
  descriptionList: string;
  id: string;
  street: string;
  score: number;
  revenueRange: string;
}

export const reducer = createReducer(
  {
    favorites: [] as Array<Companies>,
    getFaforitesStatus: `idle`,
  },
  builder => {
    builder
      .addCase(getFavorites.pending, state => {
        state.getFaforitesStatus = `pending`;
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.getFaforitesStatus = `fulfilled`;
      })
      .addCase(getFavorites.rejected, state => {
        state.getFaforitesStatus = `rejected`;
      });
  },
);

export const actions = {
  getFavorites,
};

export const selectors = {
  selectFavorites: (state: RootState) => state.companies.favorites,
};

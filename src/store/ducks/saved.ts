/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createReducer,
  createAction,
} from '@reduxjs/toolkit';

import { RootState } from '..';
import { companies, saved } from '../../api';

const getSaved = createAsyncThunk(
  `saved/getSaved`,
  async ({ pages, limit }: { pages: number; limit: number }) => {
    try {
      const response = await saved.getSaved(pages, limit);
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
  createdAt: string;
  filters: Array<string>;
  id: string;
  lastAuthor: Author;
  name: string;
  prospectsAvailable: number;
  updatedAt: string;
}

export const reducer = createReducer(
  {
    saved: [] as Array<Companies>,
    getSavedStatus: `idle`,
  },
  builder => {
    builder
      .addCase(getSaved.pending, state => {
        state.getSavedStatus = `pending`;
      })
      .addCase(getSaved.fulfilled, (state, action) => {
        state.saved = action.payload;
        state.getSavedStatus = `fulfilled`;
      })
      .addCase(getSaved.rejected, state => {
        state.getSavedStatus = `rejected`;
      });
  },
);

export const actions = {
  getSaved,
};

export const selectors = {
  selectSavedComp: (state: RootState) => state.saved.saved,
};

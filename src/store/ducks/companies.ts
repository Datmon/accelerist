/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createReducer,
  createAction,
} from '@reduxjs/toolkit';

import { RootState } from '..';
import { companies, saved } from '../../api';
import { Companies } from '../../types/interfaces';

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

const getCompanies = createAsyncThunk(
  `companies/getCompanies`,
  async ({ pages, limit }: { pages: number; limit: number }) => {
    try {
      const response = await companies.getCompanies(pages, limit);
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

const getCompany = createAsyncThunk(
  `companies/getCompany`,
  async (id: string) => {
    try {
      const response = await companies.getCompany(id);
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

export const reducer = createReducer(
  {
    favorites: [] as Array<Companies>,
    companies: [] as Array<Companies>,
    selectedCompany: {} as Companies,
    getFaforitesStatus: `idle`,
    getCompaniesStatus: `idle`,
    getCompanyStatus: `idle`,
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

    builder
      .addCase(getCompanies.pending, state => {
        state.getCompaniesStatus = `pending`;
      })
      .addCase(getCompanies.fulfilled, (state, action) => {
        state.companies = action.payload;
        state.getCompaniesStatus = `fulfilled`;
      })
      .addCase(getCompanies.rejected, state => {
        state.getCompaniesStatus = `rejected`;
      });

    builder
      .addCase(getCompany.pending, state => {
        state.getCompanyStatus = `pending`;
      })
      .addCase(getCompany.fulfilled, (state, action) => {
        state.selectedCompany = action.payload;
        state.getCompanyStatus = `fulfilled`;
      })
      .addCase(getCompany.rejected, state => {
        state.getCompanyStatus = `rejected`;
      });
  },
);

export const actions = {
  getFavorites,
  getCompanies,
  getCompany,
};

export const selectors = {
  selectFavorites: (state: RootState) => state.companies.favorites,
  selectCompanies: (state: RootState) => state.companies.companies,
  selectCompany: (state: RootState) => state.companies.selectedCompany,
};

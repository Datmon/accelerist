/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createReducer,
  createAction,
} from '@reduxjs/toolkit';

import { RootState } from '..';
import { team } from '../../api';

const getTeam = createAsyncThunk(`team/getTeam`, async () => {
  try {
    const response = await team.getTeam();
    if (response.data.error) {
      throw new Error(response.data.message);
    }
    console.log(`response.data`, response.data);
    return response.data;
  } catch (err) {
    return err;
  }
});

interface Team {
  id: string;
  searchCount: number;
  pitchCount: number;
  members: Array<{
    id: string;
    firstName: string;
    lastName: string;
    updatedAt: string;
  }>;
}

export const reducer = createReducer(
  {
    team: {} as Team,
    getTeamStatus: `idle`,
  },
  builder => {
    builder
      .addCase(getTeam.pending, state => {
        state.getTeamStatus = `pending`;
      })
      .addCase(getTeam.fulfilled, (state, action) => {
        state.team = action.payload;
        state.getTeamStatus = `fulfilled`;
      })
      .addCase(getTeam.rejected, state => {
        state.getTeamStatus = `rejected`;
      });
  },
);

export const actions = {
  getTeam,
};

export const selectors = {
  selectTeams: (state: RootState) => state.team.team,
};

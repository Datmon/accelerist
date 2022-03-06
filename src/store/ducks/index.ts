import { combineReducers } from '@reduxjs/toolkit';

import * as authDuck from './auth';
import * as savedDuck from './saved';
import * as companiesDuck from './companies';
import * as teamDuck from './team';

export const reducer = combineReducers({
  auth: authDuck.reducer,
  saved: savedDuck.reducer,
  companies: companiesDuck.reducer,
  team: teamDuck.reducer,
});

export const actions = {
  auth: authDuck.actions,
  saved: savedDuck.actions,
  companies: companiesDuck.actions,
  team: teamDuck.actions,
};

export const selectors = {
  auth: authDuck.selectors,
  saved: savedDuck.selectors,
  companies: companiesDuck.selectors,
  team: teamDuck.selectors,
};

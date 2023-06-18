import { createSelector } from 'reselect';

import { initialState } from './reducer';
import { ApplicationRootState } from '../types';

const selectState = (state: ApplicationRootState) => state.global || initialState;

const makeSelectDefaultTheme = () => createSelector(selectState, (substate) => substate.defaultTheme);

export {
    makeSelectDefaultTheme,
};

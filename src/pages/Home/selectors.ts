import { createSelector } from 'reselect';

import { ApplicationRootState } from '../../redux/types';
import { initialState } from './slice';

const selectForgotPassword = (state: ApplicationRootState) => state.home || initialState;

const makeSelectIsLoading = () => createSelector(selectForgotPassword, (state) => state.isLoading);

const makeSelectPosts = () => createSelector(selectForgotPassword, (state) => state.posts);

const makeSelectCompleted = () => createSelector(selectForgotPassword, (state) => state.completed);

export { makeSelectIsLoading, makeSelectPosts, makeSelectCompleted };

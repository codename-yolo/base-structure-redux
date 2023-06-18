import { action } from 'typesafe-actions';
import ActionTypes from './constants';

export const initPage = () => (
  action(ActionTypes.INIT_PAGE)
);

export const requestGetPostsStart = () => (
  action(ActionTypes.REQUEST_GET_POSTS_START)
);
export const requestGetPostsCompleted = (output: any) => (
  action(ActionTypes.REQUEST_GET_POSTS_SUCCESS, output)
);
export const requestGetPostsError = () => (
  action(ActionTypes.REQUEST_GET_POSTS_ERROR)
);

import { action } from 'typesafe-actions';
import ActionTypes from './constants';

export const initPage = () => (
  action(ActionTypes.INIT_PAGE)
);

export const requestGetProfileStart = (input: string) => (
  action(ActionTypes.REQUEST_GET_PROFILE_START, input)
);
export const requestGetProfileCompleted = (output: any) => (
  action(ActionTypes.REQUEST_GET_PROFILE_SUCCESS, output)
);
export const requestGetProfileError = () => (
  action(ActionTypes.REQUEST_GET_PROFILE_ERROR)
);

import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const initPage = () => (
    action(ActionTypes.INIT_PAGE)
);

export const changeTheme = (input: string) => (
    action(ActionTypes.CHANGE_THEME, input)
);

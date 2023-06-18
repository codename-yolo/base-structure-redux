import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export interface GlobalState {
    readonly defaultTheme: string;
}

export type GlobalActions = ActionType<typeof actions>;

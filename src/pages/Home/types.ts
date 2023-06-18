import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface HomeState {
    readonly isLoading: boolean;
    readonly completed: boolean,
    readonly posts: any[],
}

export type HomeActions = ActionType<typeof actions>;

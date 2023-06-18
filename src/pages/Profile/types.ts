import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface ProfileState {
    readonly isLoading: boolean;
    readonly completed: boolean,
    readonly data: Record<string, any>,
}

export type ProfileActions = ActionType<typeof actions>;

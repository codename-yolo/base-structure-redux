import { GlobalState } from './global/types';
import { HomeState } from '../pages/Home/types';
import { ProfileState } from '../pages/Profile/types';

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
    readonly global: GlobalState;
    readonly home: HomeState;
    readonly profile: ProfileState;
}

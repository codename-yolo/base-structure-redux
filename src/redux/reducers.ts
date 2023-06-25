import globalReducer from './global/reducer';
import homeReducer from '../pages/Home/slice';
import profileReducer from '../pages/Profile/slice';

/**
 * Merges all reducer
 */
const createReducer = () => {
    return {
        global: globalReducer,
        home: homeReducer,
        profile: profileReducer
    };
};

export default createReducer;

import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import reducer from './reducer';
import { useInjectReducer } from '../../redux/reduxInjectors';

import { makeSelectIsLoading, makeSelectCompleted, makeSelectData } from './selectors';
import { initPage } from './actions';
import { getProfileData } from './thunk';

const stateSelector = createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    completed: makeSelectCompleted(),
    data: makeSelectData(),
});

const key = 'profile';

const Profile: FC = () => {
    useInjectReducer(key, reducer);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { isLoading, completed, data } = useSelector(stateSelector);

    console.log(isLoading, completed, data);

    useEffect(() => {
        dispatch(getProfileData('1') as any);
        return () => {
            dispatch(initPage());
        };
    }, []);

    return (
        <div>
            Profile
            <button
                onClick={() => {
                    navigate('/');
                }}
            >
                Home
            </button>
        </div>
    );
};

export default Profile;

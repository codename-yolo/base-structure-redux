import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectIsLoading, makeSelectCompleted, makeSelectData } from './selectors';
import {
    initPage,
    requestGetProfileCompleted,
    requestGetProfileError,
    requestGetProfileStart,
} from './actions';
import { useNavigate } from 'react-router-dom';
import ProfileServices from './services';

const stateSelector = createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    completed: makeSelectCompleted(),
    data: makeSelectData(),
});

const Profile: FC = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { isLoading, completed, data } = useSelector(stateSelector);

    console.log(isLoading, completed, data);

    const getProfileData = async () => {
        dispatch(requestGetProfileStart());
        try {
            const data = await ProfileServices.getProfile('1');
            dispatch(requestGetProfileCompleted(data));
        } catch (error) {
            dispatch(requestGetProfileError());
        }
    };

    useEffect(() => {
        getProfileData();
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

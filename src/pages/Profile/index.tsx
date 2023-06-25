import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectIsLoading, makeSelectCompleted, makeSelectData } from './selectors';
import { initPage, requestGetProfileStart } from './actions';
import { useNavigate } from 'react-router-dom';

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

    useEffect(() => {
        dispatch(requestGetProfileStart('1'));
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

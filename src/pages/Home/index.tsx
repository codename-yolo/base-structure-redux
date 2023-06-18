import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectIsLoading, makeSelectCompleted, makeSelectPosts } from './selectors';
import { initPage, requestGetPostsStart } from './actions';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const stateSelector = createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    completed: makeSelectCompleted(),
    posts: makeSelectPosts(),
});

const Home: FC = () => {
    console.log('home');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    // const { isLoading, completed, posts } = useSelector(stateSelector);

    useEffect(() => {
        dispatch(requestGetPostsStart());

        return () => {
            dispatch(initPage());
        };
    }, []);

    return (
        <div>
            <button
                onClick={() => {
                    navigate('/profile');
                }}
            >
                Profile
            </button>
        </div>
    );
};

export default Home;

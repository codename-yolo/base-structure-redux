import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import { makeSelectIsLoading, makeSelectCompleted, makeSelectPosts } from './selectors';
import { initPage } from './actions';
import { getListPost } from './thunk';

const stateSelector = createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    completed: makeSelectCompleted(),
    posts: makeSelectPosts(),
});

const Home: FC = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { isLoading, completed, posts } = useSelector(stateSelector);

    console.log(isLoading, completed, posts);

    useEffect(() => {
        dispatch(getListPost() as any);

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

import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import { useInjectReducer } from '../../redux/reduxInjectors';
import homeReducer from './reducer';
import { makeSelectIsLoading, makeSelectCompleted, makeSelectPosts } from './selectors';
import {
    initPage,
    requestGetPostsCompleted,
    requestGetPostsError,
    requestGetPostsStart,
} from './actions';
import HomeServices from './services';

const stateSelector = createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    completed: makeSelectCompleted(),
    posts: makeSelectPosts(),
});

const key = 'home';

const Home: FC = () => {
    useInjectReducer(key, homeReducer);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { isLoading, completed, posts } = useSelector(stateSelector);

    console.log(isLoading, completed, posts);

    const getListPost = async () => {
        dispatch(requestGetPostsStart());
        try {
            const data = await HomeServices.getPosts();
            dispatch(requestGetPostsCompleted(data));
        } catch (error) {
            dispatch(requestGetPostsError());
        }
    };

    useEffect(() => {
        getListPost();
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

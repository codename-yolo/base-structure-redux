import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import reducer from './reducer';
import saga from './saga';
import { useInjectReducer, useInjectSaga } from '../../redux/reduxInjectors';

import { makeSelectIsLoading, makeSelectCompleted, makeSelectPosts } from './selectors';
import { initPage, requestGetPostsStart } from './actions';

const stateSelector = createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    completed: makeSelectCompleted(),
    posts: makeSelectPosts(),
});

const key = 'home';

const Home: FC = () => {
    useInjectReducer(key, reducer);
    useInjectSaga(key, saga);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { isLoading, completed, posts } = useSelector(stateSelector);

    console.log(isLoading, completed, posts);

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

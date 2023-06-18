import Home from '../pages/Home';
import Profile from '../pages/Profile';

export const publicRouters = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '*',
        element: <>Not match router</>,
        noLayout: true,
    },
];

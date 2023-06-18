import { useRoutes } from 'react-router-dom';

import { publicRouters } from './const';

const Routers = () => {
    return useRoutes(publicRouters)
};

export default Routers;

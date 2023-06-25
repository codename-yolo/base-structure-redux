import {
    useInjectReducer as useReducer,
} from 'redux-injectors';

const useInjectReducer: (key: string, reducer: any) => void = (key: string, reducer: any) => useReducer({ key, reducer });

export { useInjectReducer };
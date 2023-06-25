type ReducerName = string;
type Reducer = (state: any, action: any) => any;
type ChangeListener = (reducers: { [key: string]: Reducer }) => void;

class ReducerRegistry {
    public reducers: { [key: string]: Reducer };
    private emitChange: ChangeListener | null;

    constructor() {
        this.reducers = {};
        this.emitChange = null;
    }

    public register(name: ReducerName, reducer: Reducer): void {
        this.reducers = { ...this.reducers, [name]: reducer };
        if (this.emitChange) {
            this.emitChange(this.reducers);
        }
    }

    public setChangeListener(listener: ChangeListener): void {
        this.emitChange = listener;
    }
}

const reducerRegistry: ReducerRegistry = new ReducerRegistry();

export default reducerRegistry;

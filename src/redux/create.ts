import { legacy_createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducer";
import createSagaMiddleware from 'redux-saga';

const create = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = legacy_createStore(
        reducer, 
        composeWithDevTools(applyMiddleware(sagaMiddleware)))

    return store;
};

export default create;

//creamos el store y pasamos el reduxser
import {createStore,applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk';
import reducer from '../reducer';

//estado inicial
const initialState = {
    city:'Buenos Aires, ar'
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //debuging


export const store = createStore(reducer,initialState,composeEnhancers(applyMiddleware(thunk)));

//creamos el store y pasamos el reduxser
import {createStore} from "redux";
import {reducer} from '../reducer/city'

//estado inicial
const initialState = {
    city:'Quito,ec'
}


export const store = createStore(reducer,initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

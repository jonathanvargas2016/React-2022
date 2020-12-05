//creamos el store y pasamos el reduxser
import {createStore} from "redux";

export const store = createStore(()=>{},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

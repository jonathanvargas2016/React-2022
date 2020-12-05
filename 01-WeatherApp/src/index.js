import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {store} from './store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//con la importacion del provider ya esta funcionando react-redux junto con la app
//provider hace proveer del store a los componentes.

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>

        <App />

    </Provider>


  </React.StrictMode>,
  document.getElementById('root') //la app vivira dentro del contendor root --> index.html
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

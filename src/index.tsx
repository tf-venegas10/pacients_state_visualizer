import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { enumm_genero } from './ActionCreators';
import App from './App';
import './index.css';
import Reducer from './Reducers/index';
import * as serviceWorker from './serviceWorker';

type pacient = {
  nombre: String & string;
  edad: Number;
  genero: enumm_genero.Hombre;
  id: Number;
};

const defaultPacient: any = {
  paciente: {
    nombre: 'Tomas',
    edad: 23,
    genero: enumm_genero.Hombre,
    id: '1'
  }
};
const store = createStore(Reducer, defaultPacient, composeWithDevTools());


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

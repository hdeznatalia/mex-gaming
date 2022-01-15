import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './template/MainPage';
import {createStore} from 'redux';
import {IntlProvider} from "react-intl";
import messages_es from "./locale/es.json";
import messages_en from "./locale/en.json";

const messages = {
    'es': messages_es,
    'en': messages_en
};

const language = navigator.language.split(/[-_]/)[0];

const nameReducer = (state, action) => {
  console.log('reducer', state, action);
  return state
}

const store = createStore(nameReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <MainPage />
  </IntlProvider>,
  document.getElementById("app"));

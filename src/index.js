import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import myReducers from './redux/reducers';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from "redux-devtools-extension";
import store from './redux/store';


// const middleware = [thunk];
const myStore = store();


ReactDOM.render(
  <Provider store={myStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

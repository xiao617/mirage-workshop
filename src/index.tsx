import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { MockServer } from "./service/MockServer";

const environment = process.env.NODE_ENV;

if (environment !== 'production') {
  MockServer({environment});
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="p-grid">
      <div className="p-col-4" />
   
        <div className="p-col-4">
        <App />
        </div>
        <div className="p-col-4" />
        
        
      </div>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

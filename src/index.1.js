import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './App.jsx';
import { hashHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configureStroe from './store/configureStore'
import './App.less'
 // eslint-disable-next-line
//  if(__DEV__){
//     window.Perf = Perf;
//   }
const store = configureStroe();
ReactDOM.render(
    <Provider store={store}>
        <App  history={hashHistory} />
    </Provider>,
     document.getElementById('root'));

registerServiceWorker();

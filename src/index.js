import React from 'react';
import ReactDOM from 'react-dom';

import RouterMap from './router/routerMap'
import { hashHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configureStroe from './store/configureStore'
import './static/css/common.less'
import './static/css/font.css'
// import './App.less'
 // eslint-disable-next-line
//  if(__DEV__){
//     window.Perf = Perf;
//   }
const store = configureStroe();
ReactDOM.render(
    <Provider store={store}>
        <RouterMap  history={hashHistory} />
    </Provider>,
     document.getElementById('root'));

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
// import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './stores/Index'
import CounterGroupContainers from './containers/CounterGroupContainers';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
      <CounterGroupContainers />
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();

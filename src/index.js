import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import FirebaseContext from './Components/Firebase/context';
import Firebase from './Components/Firebase/firebase';
import App from './App';
import store from './store'

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </Provider>
  </StrictMode>,
  rootElement
);
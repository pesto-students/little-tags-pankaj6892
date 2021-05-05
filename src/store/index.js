import { createStore } from 'redux';
import rootReducer from '../reducers';
// import throttle from 'lodash';

const store = createStore(rootReducer);

export default store;

import thunk from 'redux-thunk';
import initState from './initState';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  initState(),
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  window.localStorage.setItem('DoctorHause', JSON.stringify(store.getState()))
})

export default store;

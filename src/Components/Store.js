
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from './Reducer';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk'; 

export default createStore(
  Reducer,
  composeWithDevTools(
    applyMiddleware(
      // `withExtraArgument` gives us access to axios in our async action creators!
      // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
      thunkMiddleware,
      loggingMiddleware
    )
  )
);

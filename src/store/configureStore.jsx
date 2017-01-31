import * as redux from 'redux'
import thunk from 'redux-thunk'

import{reservationsReducer, authReducer} from 'src/reducers/reducers'


//lets configure our store
export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    reservations: reservationsReducer,
    auth: authReducer
  });


  //make a redux store
  var store = redux.createStore(reducer, initialState, redux.compose(
    //lets add thunk to enable us to use impure actions
    redux.applyMiddleware(thunk),
    //do we have a dev tool if so work with it
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  //finally give back a store
  return store;
};

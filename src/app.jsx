
 import React from 'react'
 import ReactDOM from 'react-dom'
 import {Provider} from 'react-redux'
 import {hashHistory} from 'react-router'


// load jquery and foundation in the window scope
import 'script-loader!jquery'
import 'script-loader!what-input'
import 'script-loader!foundation-sites'
require('./styles/app.scss')


//add inject plugin for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
import Reservations from 'Reservations';
//get our router
import router from 'src/router'
// add material ui and theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//start inject plugin
injectTapEventPlugin();

//lets make a store
var store = require('src/store/configureStore').configure();
//add actions to call login on auth listener!!
import {login} from 'src/actions/authActions'
//do auth work
import firebase from 'src/firebase/index'



//build a theme
const cibotheme = getMuiTheme({});

const watchAuth = () => {
  //observe auth state
  firebase.auth().onAuthStateChanged((user) => {
    //logged in
    if(user) {
      store.dispatch(login({
        uid: user.uid,
        name:user.displayName,
        photo: user.photoURL,
        email: user.email
      }));
      hashHistory.push('/perm');
    } else {
      hashHistory.push('/auth');
    }
  })
}

if(process.env.NODE_ENV === 'production') {
  watchAuth();
}



 ReactDOM.render(
   <MuiThemeProvider>
     <Provider store={store}>
       {router}
     </Provider>
   </MuiThemeProvider>,
   document.getElementById('app')
 );


 if(process.env.NODE_ENV === 'development') {
   watchAuth();
   if(module.hot) {
     module.hot.accept();
   }
 }

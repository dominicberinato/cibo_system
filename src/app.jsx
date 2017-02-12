
 import React from 'react'
 import ReactDOM from 'react-dom'
 import {Provider} from 'react-redux'
 import {hashHistory} from 'react-router'
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


// load jquery and foundation in the window scope
import 'script-loader!jquery'
import 'script-loader!what-input'
import 'script-loader!foundation-sites'

require('style-loader!css-loader!sass-loader!./styles/app.scss');

//build a theme
const cibotheme = getMuiTheme({});

//do auth work
import firebase from 'src/firebase/index'
//observe auth state
firebase.auth().onAuthStateChanged((user) => {
  //logged in
  if(user) {
    hashHistory.push('/perm');
  } else {
    hashHistory.push('/auth');
  }
})

 ReactDOM.render(
   <MuiThemeProvider>
     <Provider store={store}>
       {router}
     </Provider>
   </MuiThemeProvider>,
   document.getElementById('app')
 );

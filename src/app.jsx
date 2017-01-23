
 import React from 'react'
 import ReactDOM from 'react-dom'
 import {Provider} from 'react-redux'
//add inject plugin for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
import Reservations from 'Reservations';
//start inject plugin
injectTapEventPlugin();

//lets make a store
var store = require('src/store/configureStore').configure();


// load jquery and foundation in the window scope
import 'script!jquery'
import 'script!what-input'
import 'script!foundation-sites'

require('style!css!sass!./styles/app.scss')

 ReactDOM.render(
   <Provider className="row">
     <Reservations/>
   </Provider>,
   document.getElementById('app')
 );

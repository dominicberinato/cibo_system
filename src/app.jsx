
 import React from 'react'
 import ReactDOM from 'react-dom'

//add inject plugin for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
import Reservations from 'Reservations';
//start inject pluging
injectTapEventPlugin();

// load jquery and foundation in the window scope
import 'script!jquery'
import 'script!what-input'
import 'script!foundation-sites'

require('style!css!sass!./styles/app.scss')

 ReactDOM.render(
   <div className="row">
     <Reservations/>
   </div>,
   document.getElementById('app')
 );

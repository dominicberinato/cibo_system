
 import React from 'react'
 import ReactDOM from 'react-dom'

//add inject plugin for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
//start inject pluging
injectTapEventPlugin();

// load jquery and foundation in the window scope
import 'script!jquery'
import 'script!what-input'
import 'script!foundation-sites'

require('style!css!sass!./styles/app.scss')

 ReactDOM.render(
   <div className="row">
     <div className="columns large-4 medium-4 small-12">
       <p></p>
    </div>
     <div className="columns large-4 medium-4 small-12">
       <p>CIBO PROPERTY SYSTEM</p>
       <p>Powered By<a href="https://launchdesign.co.za">Launch Design!</a></p>
     </div>
     <div  className="columns large-4 medium-4 small-12">
       <p></p>
     </div>
   </div>,
   document.getElementById('app')
 );

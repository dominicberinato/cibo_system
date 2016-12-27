
 import React from 'react'
 import ReactDOM from 'react-dom'

//add inject plugin for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
//start inject pluging
injectTapEventPlugin();
$(document).foundation();

 ReactDOM.render(
   <div>
     <p>Cibo through jsx</p>
   </div>,
   document.getElementById('app')
 );

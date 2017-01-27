import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

//add appshell
import PropertyApp from 'PropertyApp'


//add route loaders and handler

var loadRoute = (cb) =>  {
 return (module) => cb(null, module.default);
}

var errorLoading  = (err) => {
 console.error('Dynamic page loading failed', err);
}

//construct our router
export default (
  <Router history={hashHistory}>
    <Route path="/" component={PropertyApp}>
    <Route
      path="reservations"
      getComponent={(location, cb) =>{
          System.import('Reservations')
         .then(loadRoute(cb))
         .catch(errorLoading);
        }}
      />
    <Route
      path="admin"
      getComponent={(location,cb) => {
        System.import('Admin')
       .then(loadRoute(cb))
       .catch(errorLoading);
      }}
      />
    <Route
      path="app"
      getComponent={(location, cb) => {
        System.import('CiboTabs')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
      />
    </Route>
  </Router>
)

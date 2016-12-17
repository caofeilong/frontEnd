import  React from "react";

module.exports = {
  childRoutes: [{
    path: '/',
    component: require('../components/App.jsx'),
    indexRoute: {onEnter: (nextState, replace) => replace('/home')},
    childRoutes: [
      require('./home'),
      require('./travel')
    ]
  }]
};

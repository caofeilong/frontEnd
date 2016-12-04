import  React from "react";

module.exports = {
    childRoutes: [{
        path: '/',
        component: require('../components/App.jsx'),
        childRoutes: [
            require('./home'),
        ]
    }]
};
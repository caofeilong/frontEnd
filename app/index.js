import  React from "react";
import  {Router, browserHistory} from "react-router";
import  {render} from "react-dom";
import  jquery from "jquery";


import  route  from  './route';


let User = React.createClass({
    render(){
        return (<div>ded</div>)
    }
});


let roule = React.createClass({
    render(){
        return (<div>cffld33</div>)
    }
});

render((<Router history={browserHistory}><Router path="/"
                                                 component={User}></Router></Router>), document.getElementById("root"));


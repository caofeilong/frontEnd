import  React from "react";
import  {Router, browserHistory} from "react-router";
import  {render} from "react-dom";


import  route  from  './route';


let User = React.createClass({

    render(){
        return (<div>w我是用户列表</div>)
    }
});


let roule = React.createClass({
    render(){
        return (<div>cffl33</div>)
    }
});

render((<Router history={browserHistory}><Router path="/app"
                                                 component={User}></Router></Router>), document.getElementById("root"));


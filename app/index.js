import  React from "react";
import  {Router, browserHistory} from "react-router";
import  {render} from "react-dom";
import  jquery from "jquery";
import  routes  from  './routes';


render((<Router history={browserHistory} routes={routes} />), document.getElementById("root"));


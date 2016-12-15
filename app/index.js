import  React from "react";
import  {Router, browserHistory} from "react-router";
import  {render} from "react-dom";
import  jquery from "jquery";
import  routes  from  './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
require("./index.gscss");

let store = createStore(todoApp)

render((<Provider store={store}><Router history={browserHistory}
                                        routes={routes}/></Provider>), document.getElementById("root"));


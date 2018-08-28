import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch } from "react-router-dom";
import { Router, Redirect, hashHistory as history } from 'react-router';

// import Login from 'views/Login/Login';
import indexRoutes from "routes/index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

ReactDOM.render(
  <HashRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route to={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Router history={history} >
//   	<Switch>
//        {indexRoutes.map((prop, key) => {
//          return <Route to={prop.path} component={prop.component} key={key} />;
//        })}
//      </Switch>
//     <Route path="login" component={Login} />
//   </Router>,
//   document.getElementById('root')
// );

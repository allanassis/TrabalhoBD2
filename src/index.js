import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import AddView from "./components/AddView";
import EditView from "./components/EditView"
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/add" component={AddView} />
      <Route path="/edit/:id" component={EditView} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

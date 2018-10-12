import React, { Component } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import ListGrid from "./ListGrid";
class App extends Component {
  render() {
    let texto =
      "Hello World Hello World Hello World Hello WorldHello WorldHello World Hello World";
    let arr = [texto, texto, texto, texto];
    return (
      <div>
        <Link to="/add">
          <Button>add</Button>
        </Link>
        <ListGrid data={arr} />
      </div>
    );
  }
}

export default App;

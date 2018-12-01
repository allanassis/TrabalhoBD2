import React, { Component } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import ListGrid from "./ListGrid";

const centerStyle = { width: '100vw', display: "flex", justifyContent: "center", marginTop: 50 }

class App extends Component {
  render() {

    return (
      <div>
        <div style={centerStyle}>
          <Link to="/add" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" size="large">Add</Button>
          </Link>
        </div>
        <ListGrid />
      </div>
    );
  }
}

export default App;

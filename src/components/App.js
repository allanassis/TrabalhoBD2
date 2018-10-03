import React, { Component } from "react";
import "./App.css";
import ThumbPreview from "./ThumbPreview";
import ListGrid from "./ListGrid";
class App extends Component {
  render() {
    let texto =
      "Hello World Hello World Hello World Hello WorldHello WorldHello World Hello World";
    let arr = [texto, texto, texto, texto];
    return (
      <div>
        <ListGrid data={arr} />
      </div>
    );
  }
}

export default App;

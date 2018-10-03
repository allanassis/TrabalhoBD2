import React, { Component } from "react";
import "./App.css";
import ThumbPreview from "./ThumbPreview";
class App extends Component {
  render() {
    let texto =
      "Hello World Hello World Hello World Hello WorldHello WorldHello World Hello World";
    return (
      <ThumbPreview style={{ maxWidth: 200, maxHeight: 250 }} text={texto} />
    );
  }
}

export default App;

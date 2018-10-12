import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class AddView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  componentDidMount() {
    const content = window.localStorage.getItem("content");
    if (content) {
      this.setState({
        editorState: EditorState.createWithContent(
          convertFromRaw(JSON.parse(content))
        )
      });
    } else {
      this.setState({
        editorState: EditorState.createEmpty()
      });
    }
  }

  onClickSave() {
    const contentState = convertToRaw(
      this.state.editorState.getCurrentContent()
    );
    if (contentState) {
      window.localStorage.setItem("content", JSON.stringify(contentState));
    }
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState
    });
  }

  render() {
    const { editorState } = this.state;
    return (
      <div style={{ width: 500, margin: "auto" }}>
        <Link to="/">xback</Link>
        <Button onClick={this.onClickSave}>SAVE</Button>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

export default AddView;

import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, TextField, Snackbar, SnackbarContent, CloseIcon, IconButton, Icon } from "@material-ui/core";

import { MegadraftEditor, editorStateFromRaw, editorStateToJSON } from "megadraft";

import { URL_SERVICE, headers, initialState } from "../Config"

require('megadraft/dist/css/megadraft.css');


class AddView extends Component {
  constructor(props) {
    super(props);

    this.state = { editorState: editorStateFromRaw(initialState), title: "" };

    this.onClickSave = this.onClickSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  onChangeTitle(event) {
    this.setState({
      title: event.target.value
    })
  }

  onClickSave() {
    const { title, editorState } = this.state
    let data = JSON.stringify({ title, content: editorStateToJSON(editorState) })

    fetch(URL_SERVICE, { method: "POST", body: data, headers }).then(resp => {
      if (resp.ok) {
        alert('succes')
      } else {
        alert('ruim')
      }
    })
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState
    });
  }

  render() {
    return (
      <div style={{ width: 500, margin: "auto", padding: 50 }}>
        <div style={{ display: "flex", justifyContent: "space-around", margin: 50 }}>
          <Button variant="outlined" ><Link to="/" style={{ textDecoration: 'none', color: "black" }}>BACK</Link></Button>
          <TextField
            required
            label="Title"
            defaultValue="Title"
            variant="outlined"
            onChange={this.onChangeTitle}
          />
          <Button variant="outlined" onClick={this.onClickSave}>SAVE</Button>
        </div>
        <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange} />
      </div>
    );
  }
}

export default AddView;

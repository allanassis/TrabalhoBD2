import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, TextField } from "@material-ui/core";

import { MegadraftEditor, editorStateFromRaw, editorStateToJSON } from "megadraft";

import { URL_SERVICE, headers, initialState } from "../Config"

require('megadraft/dist/css/megadraft.css');


class EditView extends Component {
    constructor(props) {
        super(props);

        this.state = { editorState: editorStateFromRaw(initialState), title: "title" };

        this.onClickSave = this.onClickSave.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params
        fetch(`${URL_SERVICE}/?id=${id}`, { headers }).then(res => {
            res.json().then(resJ => {
                const data = resJ._source
                this.setState({
                    editorState: editorStateFromRaw(JSON.parse(data.content)),
                    title: data.title
                })
            })
        })
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
        const { id } = this.props.match.params
        let data = JSON.stringify({ title, content: editorStateToJSON(editorState) })

        fetch(`${URL_SERVICE}/?id=${id}`, { method: "PUT", body: data, headers })

    }

    onEditorStateChange(editorState) {
        this.setState({
            editorState
        });
    }

    render() {
        const { title } = this.state
        return (
            <div style={{ width: 500, margin: "auto", padding: 50 }}>
                <div style={{ display: "flex", justifyContent: "space-around", margin: 50 }}>
                    <Button variant="outlined"><Link to="/" style={{ textDecoration: 'none', color: "black" }}>BACK</Link></Button>
                    <TextField
                        required
                        label="Title"
                        value={title}
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

export default EditView;

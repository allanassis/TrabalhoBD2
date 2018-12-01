import React from "react";
import { GridList, GridListTile, CircularProgress, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ThumbPreview from "./ThumbPreview";
import { URL_SERVICE, headers } from '../Config'
import { editorStateFromRaw } from "megadraft";

const centerStyle = { width: '100vw', height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }

const Loading = props => (
  <div style={centerStyle}>
    <CircularProgress variant="indeterminate" />
  </div>
)

const EmptyMessage = props => (
  <Paper elevation={1}>
    <Typography variant="h5" component="h3">
      {props.title}
    </Typography>
    <Typography component="p">
      {props.message}
    </Typography>
  </Paper>
)

class ListGrid extends React.Component {

  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount() {
    fetch(URL_SERVICE, { headers }).then(res => {
      res.json().then(resJ => {
        this.setState({
          data: resJ.hits
        })
      })
    })
  }
  render() {
    const { data } = this.state

    const hasData = data && data.hits
    console.log(hasData)
    console.log(data)
    const createList = ((hasData && data.hits.length) && data.hits.map(item => (
      <GridListTile style={{ width: "auto" }} key={item._id}>
        <Link to={`/edit/${item._id}`} style={{ textDecoration: 'none' }}>
          <ThumbPreview text={item._source.title} />
        </Link>
      </GridListTile>
    )) || <EmptyMessage title="It is empty D:" message="Click on Blue button to add a new paper" />)

    return (
      <React.Fragment>
        {hasData && (<div style={centerStyle}>
          <GridList cellHeight={200} cols={4} spacing={8}>
            {createList}
          </GridList>
        </div>
        ) || <Loading />}
      </React.Fragment>
    )
  }
}

export default ListGrid;

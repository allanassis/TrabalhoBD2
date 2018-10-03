import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import ThumbPreview from "./ThumbPreview";

const ListGrid = props => (
  <GridList cellHeight={200} cols={4} spacing={8}>
    {props.data.map(texto => (
      <GridListTile>
        <ThumbPreview text={texto} />
      </GridListTile>
    ))}
  </GridList>
);

export default ListGrid;

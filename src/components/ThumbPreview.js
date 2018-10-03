import React from "react";
import Dotdotdot from "react-dotdotdot";
import { Card, CardContent, Typography } from "@material-ui/core";

const ThumbPreview = props => (
  <div style={{ ...props.style, margin: 16 }}>
    <Card>
      <CardContent>
        <Typography variant="headline" component="h2">
          <Dotdotdot clamp={4}>{props.text}</Dotdotdot>
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default ThumbPreview;

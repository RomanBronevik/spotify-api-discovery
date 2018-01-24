import React from "react";
import styled from "styled-components";
import muiThemeable from "material-ui/styles/muiThemeable";

export const PrimaryContainer = muiThemeable()(props => {
  console.log(props);
  return (
    <div
      style={{
        backgroundColor: props.muiTheme.palette.primary1Color,
        padding: props.muiTheme.spacing.desktopGutter,
        boxShadow: props.muiTheme.paper.zDepthShadows[1]
      }}
    >
      {props.children}
    </div>
  );
});

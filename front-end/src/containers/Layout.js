import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import styled from "styled-components";
import { Route } from "react-router";

// MaterialUI imports
import muiThemeable from "material-ui/styles/muiThemeable";
import AppBar from "material-ui/AppBar";

// Routing imports
import Login from "./Login";

import { getUser } from "../reducers/user";

const containerStyle = {
  height: "100vh",
  width: "100%"
};

const Container = muiThemeable()(props => {
  return (
    <div
      style={{
        backgroundColor: props.muiTheme.palette.primary2Color,
        ...containerStyle
      }}
    >
      {props.children}
    </div>
  );
});

class Layout extends Component {
  componentDidMount() {
    if (!this.props.user.id) {
      if (this.props.location.pathname.indexOf("/login/success") === -1) {
        this.props.navigateToLogin();
      } else {
        console.log("yolo");
        this.props.getUser();
      }
    }
  }

  render() {
    return (
      <Container>
        <AppBar title={<span>Spotify Discovery</span>} />
        <div>
          <Route path="/login" component={Login} />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    navigateToLogin: () => {
      dispatch(push("/login"));
    },
    getUser: () => {
      dispatch(getUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

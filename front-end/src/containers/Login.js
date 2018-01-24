import React, { Component } from "react";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";

import environment from "../environments/environment";

// Internal components
import { PrimaryContainer } from "../components/StyledComponents";

// @ASSETS
const spotifyLogoUrl =
  "https://seeklogo.com/images/S/spotify-2015-logo-560E071CB7-seeklogo.com.png";

const SpotifyLogoContainer = styled.div`
  width: 100px;
  margin: auto;
`;

const SpotifyLogo = styled.img`
  width: 100%;
`;

const containerStyle = {
  width: "400px",
  margin: "50px auto"
};

class Login extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <PrimaryContainer>
          <SpotifyLogoContainer>
            <SpotifyLogo src={spotifyLogoUrl} />
          </SpotifyLogoContainer>
          <div className="flex-container">
            <span className="flex-item" />
            <RaisedButton
              label="CONNECT TO SPOTIFY"
              secondary
              style={{ marginTop: "10px" }}
              href={`${environment.server.baseURL}${
                environment.server.authPath
              }`}
            />
            <span className="flex-item" />
          </div>
        </PrimaryContainer>
      </div>
    );
  }
}

export default Login;

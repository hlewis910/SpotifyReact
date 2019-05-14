import React, { Component, Fragment } from 'react';
import * as $ from 'jquery';
import { authEndpoint, clientId, redirectUri, scopes } from './config';
import hash from './hash';
import './App.css';
import EndVideo from './Components/EndVideo';
import { HashRouter as Router } from 'react-router-dom';
import  {Route}  from 'react-router-dom';
import Typed from 'react-typed';
//import config from './config'

import Recommend  from './Components/Recommend'

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      recommendation: [],
    };
    this.getRecommendation = this.getRecommendation.bind(this);
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token,
      });
    }
  }

  getRecommendation(token, seed) {
    console.log('was getRec called????');
    $.ajax({
      url: `https://api.spotify.com/v1/recommendations?market=ES&seed_genres=${
        seed.genre
      }&limit=10`,
      type: 'GET',
      headers: { Authorization: 'Bearer ' + token },
      success: data => {
        console.log('here are recommendations?', data);
        this.setState({
          recommendation: data.tdracks,
        });
      },
    });
  }



// var Spotify = require('spotify-web-api-js');
// var s = new Spotify();



  render() {
    console.log('check state', this.state);
    return (
      <Router>
        <body className="App-body">
          {!this.state.token ? (
            <Fragment>
              <div className="login-cover-photo">
                <img
                  src="https://cdn.dribbble.com/users/1737376/screenshots/5186212/herbstgifdribb.gif"
                  alt=""
                />
              </div>
              <div className="login-page-container">
                <div className="login-intro">
                  <Typed
                    strings={[
                      'Try your playlist',
                    ]}
                    typeSpeed={40}
                  />
                </div>

                <a
                  id="login-spotify"
                  className="btn btn--login"
                  href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                    '%20'
                  )}&response_type=token&show_dialog=true`}
                >
                  Login to Spotify
                </a>
              </div>
            </Fragment>
          ) : null}

          {this.state.token && (
          <div>
               <Route exact path="/" component={EndVideo} />
             <Route exact path="/recommendation" component={Recommend} />

            <div>
              <Recommend recommendation={this.state.recommendation}/>
              <EndVideo endVideo={this.state.endVideo} />
            </div>
            </div>

          )}
        </body>
      </Router>
    );
  }
}

export default App;



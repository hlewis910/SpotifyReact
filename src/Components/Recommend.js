import React from 'react';
import { connect } from 'react-redux';
//  import Typed from 'react-typed';

class Recommend extends React.Component {
  render() {
    const recommendation = this.props.recommendation || [];
    console.log('recommend component rendering')
    console.log(this.props);
    return (
      <div className="playlist">
        <tbody>
          <tr className="playlist-header">
            <td>Song</td>
            <td>Artist</td>
            <td>Album</td>
          </tr>
          {recommendation.map(track => (
            <tr key={track.name}>
              <td>
                <a href={track.external_urls.spotify}>{track.name}</a>
              </td>
              <td>{track.artists[0].name}</td>
              <td>{track.album.name}</td>
            </tr>
          ))}
        </tbody>

        <a
          id="login-spotify"
          className="btn btn--login"
          href="http://localhost:3000/"
        >
          Play Again
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recommendation: state.recommendation,
  };
};

export default connect(
  mapStateToProps,
  null
)(Recommend);

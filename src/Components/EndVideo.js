import React from 'react';
import { connect } from 'react-redux';
import { getRecommendation } from './Reducer';
import hash from '../hash';

class EndVideo extends React.Component {
  constructor() {
    super();
    this.state = {

      artist: null,
      genre: '',
      // endVideo: true,
      spotifyData: [],

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // event.preventDefault();
    console.log('is state updated?', this.props);
    this.props.getRecommendation(this.state, hash.access_token);
    this.props.history.push('/recommendation');
  }

  render() {
    return (
      <div>
            <div className="submit-playlist">
              <img
                id="generate-playlist"
                type="submit"
                src="https://media0.giphy.com/media/Nm8ZPAGOwZUQM/200.webp?cid=790b76115cd8cab1586e325032e59366&rid=200.webp"
                border="0"
                value="generate-playlist"
                alt="submit"
              />
              <p onClick={() => this.handleSubmit()}>Generate Playlist</p>
            </div>
          )

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRecommendation: (seed, token) =>
      dispatch(getRecommendation(seed, token)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(EndVideo);

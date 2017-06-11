import React, { Component } from 'react';
import Axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playerActions from '../actions/player';

import NowPlaying from '../containers/NowPlaying.jsx';

class Player extends Component {
  constructor(props) {
    super(props)
    this.getPlaylist = this.getPlaylist.bind(this)
    this.storePlaylist = this.storePlaylist.bind(this)
    this.state = {
    }
  }

  componentWillMount(props) {
    this.getPlaylist();
  }

  getPlaylist(props) {
    let _this = this;
    Axios.get('/spotify')
      .then(function (response) {
        _this.storePlaylist(response.data)
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  storePlaylist(list) {
    var tracks = {}
    list.forEach(function(obj, i) {
      tracks[i+1] = obj.track
    })
    this.props.actions.storeTracks(tracks)
  }

	render() {
		return (
      <div className="player">
        <NowPlaying />
      </div>
    )
	}
}

function mapStateToProps(state, props) {
    return {
        tracks: state.player.tracks,
        currentSong: state.player.tracks[state.player.currentIndex],
        isPlaying: state.player.isPlaying
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(playerActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
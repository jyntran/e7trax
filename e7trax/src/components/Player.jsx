import React, { Component } from 'react';
import Axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playerActions from '../actions/player';

import NowPlaying from '../containers/NowPlaying.jsx';
import Playlist from '../components/Playlist.jsx';

class Player extends Component {
  constructor(props) {
    super(props)
    this.getPlaylist = this.getPlaylist.bind(this)
    this.storePlaylist = this.storePlaylist.bind(this)
    this.handleDrawer = this.handleDrawer.bind(this)
    this.state = {
      drawerOpen: false
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

  handleDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }

	render() {
    const menuClass =
      this.state.drawerOpen ? "menu open"
      : "menu closed"
    const mainClass =
      this.state.drawerOpen ? "main open"
      : "main closed"

		return (
      <div className="player">
        <div className="settings">
          <Playlist />
        </div>
        <div className={menuClass}
          onClick={this.handleDrawer}>
          <i className="icon-menu"></i>
        </div>
        <div className={mainClass}>
          <NowPlaying />
        </div>
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
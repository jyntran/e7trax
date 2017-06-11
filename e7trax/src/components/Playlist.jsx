import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playerActions from '../actions/player';

class Playlist extends Component {
  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this)
    this.state = {
    }
  }

  onSelect(index) {
    this.props.actions.selectTrack(index)
  }

  renderTracks() {
    const tracks = this.props.tracks;
    
    return Object.keys(tracks).map((index) => {
      const trackClass =
        this.props.currentIndex == index ?
          'playlist-track selected'
        : 'playlist-track'

      return (
        <li key={index}
          className={trackClass}
          onClick={() => this.onSelect(index)}>
          <span>{tracks[index].name}</span>
          <br/>
          <span>{tracks[index].artists[0].name}</span>
        </li>
      )
    })
  }

    render() {
      return (
        <div className="playlist">
          <ol className="playlist-tracks">
            {this.renderTracks()}
          </ol>
        </div>
      )
    }
}

function mapStateToProps(state, props) {
    return {
        tracks: state.player.tracks,
        currentIndex: state.player.currentIndex
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(playerActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
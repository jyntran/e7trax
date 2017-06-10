import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playerActions from '../actions/player';

class Controls extends Component {
  constructor(props) {
    super(props)
    this.onPlay = this.onPlay.bind(this)
    this.onBack = this.onBack.bind(this)
    this.onForward = this.onForward.bind(this)
    this.state = {
    }
  }

  onPlay() {
    this.props.actions.playTrack()
  }

  onBack(currentSongIndex) {
    this.props.actions.backTrack(currentSongIndex)
  }

  onForward(tracks, currentSongIndex) {
    this.props.actions.forwardTrack(tracks, currentSongIndex)
  }

    render() {
      return (
        <div className="controls">
          <div className="control-box">
            <div className="controls btn btn-back"
              onClick={() => this.onBack(this.props.currentSongIndex)}>
              <i className="icon-skip_previous"></i>
            </div>
            { this.props.isPlaying ? 
              <div className="controls btn btn-pause"
                onClick={() => this.onPlay()}>
                <i className="icon-pause"></i>
              </div>
            :
              <div className="controls btn btn-play"
                onClick={() => this.onPlay()}>
                <i className="icon-play_arrow"></i>
              </div>
            }
            <div className="controls btn btn-forward"
              onClick={() => this.onForward(this.props.tracks, this.props.currentSongIndex)}>
              <i className="icon-skip_next"></i>
            </div>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state, props) {
    return {
        tracks: state.player.tracks,
        currentSong: state.player.currentSong,
        currentSongIndex: state.player.currentSongIndex,
        isPlaying: state.player.isPlaying
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(playerActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playerActions from '../actions/player';

class Controls extends Component {
  constructor(props) {
    super(props)
    this.onPlay = this.onPlay.bind(this)
    this.onPause = this.onPause.bind(this)
    this.onBack = this.onBack.bind(this)
    this.onForward = this.onForward.bind(this)
    this.state = {
    }
  }

  onPlay(index) {
    this.props.actions.playTrack(index)
  }

  onPause() {
    this.props.actions.pauseTrack()
  }

  onBack(index) {
    this.props.actions.backTrack(index)
  }

  onForward(index, numOfTracks) {
    this.props.actions.forwardTrack(index, numOfTracks)
  }

    render() {
      return (
        <div className="controls">
          <div className="control-box">
            <div className="btn btn-back"
              onClick={() => this.onBack(this.props.currentIndex)}>
              <i className="icon-skip_previous"></i>
            </div>
            { this.props.isPlaying ? 
              <div className="btn btn-pause"
                onClick={() => this.onPause()}>
                <i className="icon-pause"></i>
              </div>
            :
              <div className="btn btn-play"
                onClick={() => this.onPlay(this.props.currentIndex)}>
                <i className="icon-play_arrow"></i>
              </div>
            }
            <div className="btn btn-forward"
              onClick={() => this.onForward(this.props.currentIndex, this.props.numberOfTracks)}>
              <i className="icon-skip_next"></i>
            </div>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state, props) {
    return {
        numberOfTracks: Object.keys(state.player.tracks).length,
        currentSong: state.player.tracks[state.player.currentIndex],
        currentIndex: state.player.currentIndex,
        isPlaying: state.player.isPlaying
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(playerActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
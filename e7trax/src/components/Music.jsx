import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playerActions from '../actions/player';

import Sound from 'react-sound';

class Music extends Component {
  constructor(props) {
    super(props)
    this.handlePlayStatus = this.handlePlayStatus.bind(this)
    this.handleSongPlaying = this.handleSongPlaying.bind(this)
    this.handleSongFinished = this.handleSongFinished.bind(this)
    this.handleSongLoading = this.handleSongLoading.bind(this)
    this.state = {
      playStatus: Sound.status.STOPPED,
      elapsed: '00:00',
      total: '00:00',
      position: 0,
      playFromPosition: 0,
      loaded: false
    }
  }

  formatMilliseconds(milliseconds) {
    var hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;

    var minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;

    var seconds = Math.floor(milliseconds / 1000);
    milliseconds = Math.floor(milliseconds % 1000);

    return (minutes < 10 ? '0' : '') + minutes + ':' +
    (seconds < 10 ? '0' : '') + seconds;
  }

  handlePlayStatus(isPlaying) {
    const prevStatus = this.state.playStatus
    const status = isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED
    if (prevStatus !== status) {
      this.setState({
        playStatus: status
      })
      return status
    }
    return this.state.playStatus
  }

  handleSongPlaying(audio) {
    this.setState({
      elapsed: this.formatMilliseconds(audio.position),
      total: this.formatMilliseconds(audio.duration),
      position: audio.position / audio.duration
    });
  }

  handleSongFinished() {
    this.props.actions.forwardTrack(this.props.currentIndex, this.props.numberOfTracks)
  }

  handleSongLoading(audio) {
    const prevState = this.state.loaded
    const state = (audio.bytesLoaded > 0)
      && (audio.bytesLoaded === audio.bytesTotal)
    if (prevState !== state) {
      this.setState({
        loaded: state
      })
    }
    return state
  }

  render() {
    const strokeVal = (
      this.state.position === 0 ? '0%' :
      this.state.position === 1 ? '315%' :
      (this.state.position * 315 + 10) + '%'
    )
    const barStyle = {
      strokeDashoffset: strokeVal
    }
    return (
      <div className="music">
          <Sound
            url={
              this.props.currentSong ?
              this.props.currentSong.preview_url
              : '' }
            playStatus={this.handlePlayStatus(this.props.isPlaying)}
            onPlaying={this.handleSongPlaying}
            playFromPosition={this.state.playFromPosition}
            onFinishedPlaying={this.handleSongFinished}
            onLoading={this.handleSongLoading}/>
            <svg className="music-progress" preserveAspectRatio="none">
              <circle className="fill" cx="50%" cy="50%" r="50%" fill="none" stroke="#00cccc" strokeWidth="4" />
              <circle className="bar" cx="50%" cy="50%" r="50%" fill="none" stroke="#333333" strokeWidth="6"
                style={barStyle}/>
            </svg>
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

export default connect(mapStateToProps, mapDispatchToProps)(Music);
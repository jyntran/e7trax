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
    this.state = {
      playStatus: Sound.status.STOPPED,
      elapsed: '00:00',
      total: '00:00',
      position: 0,
      playFromPosition: 0
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
    console.log('handleSongFinished')
  }

  render() {
    return (
      <div className="music">
          <Sound
            url={
              this.props.currentSong.track ?
              this.props.currentSong.track.preview_url
              : '' }
            playStatus={this.handlePlayStatus(this.props.isPlaying)}
            onPlaying={this.handleSongPlaying}
            playFromPosition={this.state.playFromPosition}
            onFinishedPlaying={this.handleSongFinished}/>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
    return {
        currentSong: state.player.currentSong,
        isPlaying: state.player.isPlaying
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(playerActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);
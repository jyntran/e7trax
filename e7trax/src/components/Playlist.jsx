import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playerActions from '../actions/player';
import ClassName from 'classnames';

class Playlist extends Component {
  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this)
    this.state = {
    }
  }

  onSelect(index) {
    this.props.actions.playTrack(index)
  }

  renderTracks() {
    const tracks = this.props.tracks;
    
    return Object.keys(tracks).map((index) => {
      const trackClass = ClassName(
        'playlist-track',
        {
          selected: this.props.currentIndex == index,
          error: !this.props.tracks[index].preview_url
        })

      return (
        <li key={index}
          className={trackClass}
          onClick={() => this.onSelect(index)}>
          <span className="track">{tracks[index].name}</span> <i className="error-icon icon-error" title="No preview available" aria-hidden="true"></i>
          <br/>
          <span className="artist">{tracks[index].artists[0].name}</span>
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
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

  onLink(index) {

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
          <div className="track-number">
            <span>{index}.</span>
          </div>
          <div className="track-info">
            <span className="track">{tracks[index].name}</span>
            <br/>
            <span className="artist">{tracks[index].artists[0].name}</span>
          </div>
          <div className="track-status">
            <i className="icon-play_arrow" aria-hidden="true"></i>
            <i className="icon-graphic_eq" aria-hidden="true"></i>
            <i className="icon-warning" aria-hidden="true" title="No preview available"></i>
          </div>  
          <div className="track-link">
            <a href={tracks[index].external_urls.spotify} target="_blank" title="Open on Spotify">
              <i className="icon-link" aria-hidden="true"></i>
            </a>
          </div>  
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
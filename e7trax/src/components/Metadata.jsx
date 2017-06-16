import React, { Component } from 'react';
import { connect } from 'react-redux';

class Metadata extends Component {
	renderTrack() {
		return (
			<span>
				{this.props.currentSong ?
					this.props.currentSong.name
					: null}
			</span>
		)
	}

	renderArtist() {
		return (
			<span>
				{this.props.currentSong ?
					this.props.currentSong.artists[0].name
					: null}
			</span>
		)
	}

	render() {
		return (
	      <div className="metadata">
	        <div className="track">
	            {this.renderTrack()}
	        </div>
            <div className="artist">
            	{this.renderArtist()}
            </div>
	      </div>
    )
	}
}

function mapStateToProps(state, props) {
    var currentIndex;
    if (state.player.currentIndex !== null)
      currentIndex = state.player.currentIndex.toString();
    return {
        currentSong: state.player.tracks[currentIndex]
    };
}

export default connect(mapStateToProps)(Metadata);
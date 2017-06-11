import React, { Component } from 'react';
import { connect } from 'react-redux';

class Metadata extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	padDigits(num) {
		return ("0" + num).slice(-2)
	}

	renderNumber() {
		return (
			<span>
				{this.props.currentSong ?
					this.padDigits(this.props.currentIndex)
					: null}
			</span>
		)
	}

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
	      	<div className="number">
	      	{this.renderNumber()}
	      	</div>
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
        currentSong: state.player.tracks[currentIndex],
        currentIndex: state.player.currentIndex
    };
}

export default connect(mapStateToProps)(Metadata);
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
				{this.props.currentSong.track ?
					this.padDigits(this.props.currentSong.track.track_number)
					: null}
			</span>
		)
	}

	renderTrack() {
		return (
			<span>
				{this.props.currentSong.track ?
					this.props.currentSong.track.name
					: null}
			</span>
		)
	}

	renderArtist() {
		return (
			<span>
				{this.props.currentSong.track ?
					this.props.currentSong.track.artists[0].name
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
    return {
        currentSong: state.player.currentSong
    };
}

export default connect(mapStateToProps)(Metadata);
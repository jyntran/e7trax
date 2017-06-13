import React, { Component } from 'react';
import { connect } from 'react-redux';

class TrackNumber extends Component {
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

	render() {
		return (
	        <div className="number">
	        	{this.renderNumber()}
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

export default connect(mapStateToProps)(TrackNumber);
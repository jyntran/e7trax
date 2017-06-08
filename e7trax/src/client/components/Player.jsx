import React, { Component } from 'react';

import NowPlaying from './NowPlaying.jsx';

export default class Player extends Component {
	render() {
		return (
      <div className="player">
        <NowPlaying/>
      </div>
    )
	}
}
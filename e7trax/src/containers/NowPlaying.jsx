import React, { Component } from 'react';

import Music from '../components/Music.jsx';
import Metadata from '../components/Metadata.jsx';
import Controls from '../components/Controls.jsx';

export default class NowPlaying extends Component {
	render() {
		return (
			<div className="nowPlaying">
				<Music />
      			<Metadata/>
        		<Controls/>
      		</div>
    	)
	}
}
import React, { Component } from 'react';

import About from '../components/About.jsx';
import Playlist from '../components/Playlist.jsx';

export default class Settings extends Component {
	render() {
		return (
			<div className="settings">
				<div className="header">
					<About/>
				</div>
				<Playlist />
  		</div>
    	)
	}
}
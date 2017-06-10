import React, { Component } from 'react';

import Metadata from '../components/Metadata.jsx';
import Controls from '../components/Controls.jsx';

export default class NowPlaying extends Component {
	render() {
		return (
			<div className="nowPlaying">
      			<Metadata/>
        		<Controls/>
      		</div>
    	)
	}
}
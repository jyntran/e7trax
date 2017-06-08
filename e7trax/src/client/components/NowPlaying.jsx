import React, { Component } from 'react';

import Metadata from './Metadata.jsx';
import Controls from './Controls.jsx';

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
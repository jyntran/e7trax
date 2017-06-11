import React, { Component } from 'react';

import Playlist from '../components/Playlist.jsx';

export default class Settings extends Component {
	render() {
		return (
			<div className="settings">
				<div className="header">
		          <div className="about">
		          	<h1 className="title">e7 trax</h1>
		            <p>Eureka Seven &copy; Studio BONES, Funimation</p>
		            <p>Made with love by <a href="http://jyntran.ca" title="jyntran.ca">Jensen Tran</a></p>
		          </div>
				</div>
				<Playlist />
      		</div>
    	)
	}
}
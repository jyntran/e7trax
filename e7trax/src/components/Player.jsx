import React, { Component } from 'react';
import Axios from 'axios';

import NowPlaying from './NowPlaying.jsx';

export default class Player extends Component {
  componentDidMount() {
    Axios.get('/spotify')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

	render() {
		return (
      <div className="player">
        <NowPlaying/>
      </div>
    )
	}
}
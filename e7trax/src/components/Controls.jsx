import React, { Component } from 'react';

export default class Player extends Component {
    render() {
      return (
        <div className="controls">
          <div className="backBtn">
            <i className="icon-skip_previous"></i>
          </div>
          <div className="playBtn">
            <i className="icon-play_arrow"></i>
            <i className="icon-pause"></i>
          </div>
          <div className="forwardBtn">
            <i className="icon-skip_next"></i>
          </div>
        </div>
      )
    }
}
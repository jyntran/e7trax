import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="title">e7 trax</h1>
        <p><a href={this.props.playlistUrl} target="_blank">Open playlist on Spotify</a></p>
        <p>Eureka Seven &copy; Studio BONES, Funimation</p>
        <p>Made with love by <a href="http://jyntran.ca" title="jyntran.ca">Jensen Tran</a></p>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
    return {
        playlistUrl: state.player.playlistUrl
    };
}

export default connect(mapStateToProps)(About)
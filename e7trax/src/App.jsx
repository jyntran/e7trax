import React, { Component } from 'react';

import Player from './components/Player.jsx';

import './icomoon/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Player/>
        <div className="footer">
        	Eureka Seven &copy; Studio BONES, Funimation
        </div>
      </div>
    );
  }
}

export default App;
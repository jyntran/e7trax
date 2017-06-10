import React, { Component } from 'react';

import Player from './components/Player.jsx';

import './icomoon/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Player/>
      </div>
    );
  }
}

export default App;
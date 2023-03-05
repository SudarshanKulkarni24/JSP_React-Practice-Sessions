import React, { Component } from 'react';
import './App.css'
import Byjus from './components/Byjus';
import Hotstar from './components/Hotstar';
import Random from './components/Random';
import Zee5 from './components/Zee5';
import Hackerrank from './components/Hackerrank';
class App extends Component {
  render() {
    return (
      <>
      < Hotstar/>
      <br/>
      <Zee5/>
      <br />
      <Byjus/>
      <br />
      <Random/>
      <hr />
      <br />
      <Hackerrank/>
      </>
    );
  }
}

export default App;

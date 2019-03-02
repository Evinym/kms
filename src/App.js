import React, { Component } from 'react';
import './App.css';

import Heade from './components/header';
import Palette from './components/palette';
import Footer from './components/footer';
import Looter from './components/teste';

class App extends Component {
  render() {
    return (
      <div className="App-center-blok">
        <Heade/>
        <Palette/>
        <Footer/>
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import logo from '../images/Logo-KMS.jpg';

class Tapp extends Component {
  render() {
    return (
        <header className="App-header App">
          <img src={logo} className="App-logo" alt="logo" />
          <br/><br/>
          <p>Come to listen.. This world is yours</p>
        </header>
    );
  }
}
export default Tapp;
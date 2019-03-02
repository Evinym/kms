import React, { Component } from 'react';
import elLogo from '../images/el-Three.jpg';

class Footer extends Component {
  render() {
    return (
        <footer className="App-footer">
            <br/>
            <img src={elLogo} className="App-logo" alt="logo" />
            <br/>
            <p className="lumine-size">Made whith a lot love by Evinym</p>
        </footer>
    );
  }
}
export default Footer;
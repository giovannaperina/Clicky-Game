import React, { Component } from 'react';

import logo from '../images/logo.png';

class Hero extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <div className="back-image text-center">
            <img src={logo}  alt="title-header" width="250px" />
            <p> Click on an image to earn points, but don't click on any more than once! </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;

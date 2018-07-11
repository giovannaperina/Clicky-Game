import React, { Component } from 'react';

class Header extends Component {
  render() {
    const score = this.props.score;
    const topScore = this.props.topScore;

    return (
      <div className="game-nav">
        <div className="row">
          <div className="container">
            <div className="title col-md-4">
              <h4> Clicky Game </h4>
            </div>
            <div className="instructions col-md-4">
              <h4> Click an image to begin! </h4>
            </div>
            <div className="score col-md-2 col-xs-6">
              <h4> Score:<span> { score } </span> </h4>
            </div>
            <div className="top-score col-md-2 col-xs-6">
              <h4> Top Score:<span> { topScore } </span> </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

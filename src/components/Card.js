import React, { Component } from 'react';

class Card extends Component {
  render() {
    const character = this.props.character;
    
    return (
      <div onClick={ this.props.onClick } className="col-md-3 col-sm-4 col-xs-6">
        <div className="card-character">
          <img src={`/characters/${character}.png`} alt={character} />
        </div>
      </div>
    );
  }
}

export default Card;

import React, { Component } from 'react';
import swal from 'sweetalert';
import _ from 'lodash';

import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';

import cardsJson from './cards.json';


class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    cards: [],
    selectedCards: []
  }

  componentDidMount() {
    this.setState({
      cards: _.shuffle(cardsJson)
    });
  }

  resetGame = () => {
    this.setState({
      selectedCards: [],
      score: 0, 
      cards: _.shuffle(cardsJson) // randomize cards
    });
  }


  addScore = (card) => {
    let selectedCards = this.state.selectedCards;
    let score = this.state.score;
    let topScore = this.state.topScore;

    // if clicked card exists inside selectedCards array
    if( _.includes(selectedCards, card) ) {
      swal("You Lose!", "Try again...", "error");
      this.resetGame();

    } else {

      selectedCards.push(card);
      score = score + 1;

      if( score > topScore ) { // If score is bigger than topScore, then update topScore
        topScore = score;
      }

      this.setState({
        selectedCards: selectedCards,
        score: score, // add +1
        topScore: topScore,
        cards: _.shuffle(cardsJson) // randomize cards
      });

      if(selectedCards.length === 12) {
        swal("You Won!", "Congratulations!", "success");
        this.resetGame();
      }

    }

  }

  renderCards = () => {
    const cards = this.state.cards;
    
    return cards.map((card, key) => {
      return <Card onClick={ () => this.addScore(card) } character={card} key={key} />
    })
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header score={ this.state.score } topScore={ this.state.topScore } />
          <Hero />

          <div className="game-content">
            <div className="container">
              <div className="row">
                <section className="game-card">
                  
                  { this.renderCards() }

                </section>
              </div>
            </div>
          </div>


        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, { Component} from 'react'
import $ from 'jquery';

class App extends React.Component {

  state = {
    count: 0,
    timerCount: 0,
  };

  handleClickPlus = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleClickMinus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  timerClickStart =  () => {
    localStorage.setItem("timerCount", this.state.timerCount)
    switch ($('#timerStart').html()) {
      case 'Start':
        $('#timerStart').text('Stop')
        this.counterId = setInterval(() => {
          this.setState({ timerCount: this.state.timerCount + 1 });
          localStorage.setItem("timerCount", this.state.timerCount)
        }, 1000)
        break
      case 'Stop':
        $('#timerStart').text('Start')
        clearInterval(this.counterId)
        localStorage.setItem("timerCount", this.state.timerCount)
        break
    }
    
  }

  timerClickReset = () => {
    this.setState({ timerCount: 0 })
    localStorage.setItem("timerCount", this.state.timerCount)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section>
            <button onClick={this.handleClickPlus}>+</button>
            <h3>{this.state.count}</h3>
            <button onClick={this.handleClickMinus}>-</button>
          </section>
          
          <br />

          <section>
            <button id="timerStart" onClick={this.timerClickStart}>Start</button>
            <button onClick={this.timerClickReset}>Reset</button>
            <h3>{this.state.timerCount}</h3>
          </section>
        </header>

        
      </div>
    );
  }
}

export default App;

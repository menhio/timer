import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Timer from './components/timer/index.js';

const title = "Timer";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      start: 0,
      timerOn: false
    }

    this.runTimer = this.runTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.restartimer = this.restartimer.bind(this)
  }

  runTimer() {
    this.setState({
      timerOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now() - this.state.start
      })
    }, 1)
  }

  stoptimer() {
    this.setState({
      timerOn: false
    })
    clearInterval(this.timer)
  }

  resetTimer() {
    this.setState({
      time: 0,
      timerOn: false
    })
  }

  render() {
    return (
      <div>
        <nav className="app-header layout-row align-items-center justify-content-center">
          <div className="layout-row align-items-center">
            <img alt="" src={logo} className="logo"/>
            <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
          </div>
        </nav>
        <Timer initial={this.props.initial}/>
      </div>
    );
  }
}

export default App;

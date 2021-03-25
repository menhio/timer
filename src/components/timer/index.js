import React, { Component } from "react";
import "./index.css";

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      start: 0,
      timerOn: false
    }
  }

  runTimer = () => {
    this.setState({
      timerOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now() - this.state.start
      })
    }, 1000)
  }

  stopTimer = () =>  {
    this.setState({
      timerOn: false,
    })
    clearInterval(this.timer)
  }

  resetTimer = () =>  {
    this.setState({
      time: 0,
      timerOn: false
    })
    clearInterval(this.timer)
  }

  render() {
    let {timerOn, time} = this.state

    const timerButtons = () => {
      if(timerOn) {
        return(
          <div>
            <button className="large" data-testid="stop-button" onClick={this.stopTimer}>Stop Timer</button>
          </div>
        )
      }
      else {
        return(
          <button className="large" data-testid="stop-button" onClick={this.runTimer}>Start Timer</button>
        )
      }
    }

    const resetButton = () => {
      if(!timerOn && time > 0) {
        return(
          <button className="large" data-testid="stop-button" onClick={this.resetTimer}>Reset Timer</button>
        )
      }
    }

    const formatedTime = () => {
      let seconds = Math.floor((time / 1000) % 60)
      let minutes = Math.floor((time / 1000) / 60)
      let hours = Math.floor(((time / 1000) / 60) / 60)
      let formartedSeconds = ''
      let formartedMinutes = ''
      let formartedHours = ''
      formartedSeconds = seconds < 10 ? `0${seconds}` : seconds
      formartedMinutes = minutes < 10 ? `0${minutes}` : minutes
      formartedHours = hours < 10 ? `0${hours}` : hours
      
      return (
        <div className="timer-value" data-testid="timer-value">{formartedHours}:{formartedMinutes}:{formartedSeconds}</div>
      )
    }

    return (
      <div className="mt-100 layout-column align-items-center justify-content-center">
        {formatedTime()}
        {timerButtons()}
        {resetButton()}
      </div>
    );
  }
}


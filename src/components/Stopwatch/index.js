import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {min: '00', sec: '00', Initial: false}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  Start = () => {
    this.setState({
      Initial: false,
    })

    console.log(this.timerId)
    if (!this.timerId) {
      this.timerId = setInterval(this.PlayIcon, 1000)
    }
  }

  Stop = () => {
    this.setState({
      Initial: true,
    })
    if (!this.timerId) {
      this.timerId = setInterval(this.PlayIcon, 1000)
    }
  }

  PlayIcon = () => {
    const {Initial} = this.state
    console.log('start @ stop')
    if (!Initial) {
      const {sec, min} = this.state
      console.log('innerstart')
      if (parseInt(sec) >= 0 && parseInt(sec) < 9) {
        this.setState(prevState => ({
          sec: 0 + (parseInt(prevState.sec) + 1).toString(),
        }))
      } else if (parseInt(sec) < 59) {
        this.setState(prevState => ({
          sec: parseInt(prevState.sec) + 1,
        }))
      } else if (parseInt(sec) === 59) {
        if (parseInt(min) >= 0 && parseInt(min) < 9) {
          this.setState(prevState => ({
            min: 0 + (parseInt(prevState.min) + 1).toString(),
            sec: '00',
          }))
        } else if (parseInt(min) < 59) {
          this.setState(prevState => ({
            min: parseInt(prevState.min) + 1,
          }))
        }
      }
    }
  }

  Reset = () => {
    this.setState({min: '00', sec: '00', Initial: true})
  }

  render() {
    const {min, sec} = this.state
    return (
      <div className="first">
        <h1 className="heading">Stopwatch</h1>
        <div className="finalContainer">
          <div className="second">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <h1 className="head">Timer</h1>
          </div>
          <h1>
            {min}:{sec}
          </h1>
          <div className="button12">
            <button type="button" className="button1" onClick={this.Start}>
              Start
            </button>
            <button type="button" className="button2" onClick={this.Stop}>
              Stop
            </button>
            <button type="button" className="button3" onClick={this.Reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

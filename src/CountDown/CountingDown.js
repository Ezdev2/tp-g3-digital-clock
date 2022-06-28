import React, { Component } from 'react';
import './style.css';

class CountingDown extends Component {
  constructor() {
    super();
    this.state = {
      heure: 0,
      minutes: 0,
      secondes:0
    }
    this.hoursInput = React.createRef();
    this.minutesInput= React.createRef();
    this.secondsInput = React.createRef();
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  convertToSeconds = ( heure, minutes,secondes) => {
    return secondes + minutes * 60 + heure * 60 * 60;
  }

  startTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    const  { heure, minutes, secondes } = this.state;
    let c_seconds = this.convertToSeconds(heure, minutes, secondes);

    if(c_seconds) {

      secondes ? this.setState({secondes: secondes-1}) : this.setState({secondes: 59});

      if(c_seconds % 60 === 0 && minutes) {
        this.setState({minutes: minutes -1});
      }

      if(!minutes && heure) {
        this.setState({minutes: 59});
      }

      if(c_seconds % 3600 === 0 && heure) {
        this.setState({heure: heure-1});
      }

    } else {
      clearInterval(this.timer);
    }
  }


  stopTimer = () => {
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({
      heure: 0,
      minutes: 0,
      secondes: 0
    });
    this.hoursInput.current.value = 0;
    this.minutesInput.current.value = 0;
    this.secondsInput.current.value = 0;
  }


  render() {
    const { heure, minutes, secondes } = this.state;

    return (
      <div>
         <div className="clock-container">
            <div className="inputGroup">
                <div>
                    <h3>Heures</h3>
                    <input ref={this.hoursInput} type="number" placeholder={0}  name="heure"  onChange={this.inputHandler} />
                </div>
                <div>
                    <h3>Minutes</h3>
                    <input  ref={this.minutesInput} type="number"  placeholder={0}   name="minutes"  onChange={this.inputHandler} />
                </div>
                <div>
                    <h3>Secondes</h3>
                    <input   ref={this.secondsInput} type="number"  placeholder={0}  name="secondes"  onChange={this.inputHandler} />
                </div>
            </div>

            <p className="clock">
                <span>{heure}</span>:
                <span>{minutes}</span>:
                <span>{secondes}</span>
            </p>

            <div className="button">
                <button onClick={this.startTimer} className="start">Commencer</button>
                <button onClick={this.stopTimer}  className="stop">Arrêter</button>
                <button onClick={this.resetTimer}  className="reset">Reprendre</button>
            </div>
        </div>
      </div>
    );
  }
}

export default CountingDown;
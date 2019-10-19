import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
class StopClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        on: false,
        start: 0,
        time: 0
      };
      this.startTimer = this.startTimer.bind(this);
      this.stopTimer = this.stopTimer.bind(this);
      this.resetTimer = this.resetTimer.bind(this);
    }
    startClock() {
      
        this.timerTime = setInterval(
          () => this.tick(),
          10
        );
        console.log("run");
      
  
    }
    //this take away the old time
    stopClock() {
      clearInterval(this.timerTime);
    }
    tick() {
      //to set the new state
      this.setState({
        time: this.state.time + 1
      });
    }
    startTimer = () => {
      this.setState({
        on: true,
        // time: this.state.time,
        // start: this.state.time
        //start: Date.now() - this.state.time
      });
      this.startClock()
    };
    stopTimer = () => {
      this.setState({
        on: false,
        // time: this.state.time
      });
      this.stopClock();
    };
    resetTimer = () => {
      this.setState({ time: 0 })
    };
    render() {
      return (
        <div>
          <h1>Hello this is a stopClock</h1>
          <h1>{this.state.time}</h1>
          {this.state.on
            ? <button onClick={this.stopTimer}>Stop</button>
            : <button onClick={this.startTimer}>Start</button>
  
          }
          <button onClick={this.resetTimer}>Reset</button>
          {/* <button onClick=()>{this.state.timeOn ? "Stop":"Start"}</button> */}
  
        </div>
      )
  
    }
  
  
  }
  
  ReactDOM.render(
    <StopClock />,
    document.getElementById('clock')
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

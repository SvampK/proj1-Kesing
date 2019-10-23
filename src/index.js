import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import ms from 'pretty-ms';


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
    startTimer = () => {
        this.setState({
            on: true,
            // time: this.state.time,
            // start: this.state.time
        });
        this.startClock()
    };
    startClock() {

        this.setState({
            start: Date.now() - this.state.time
        });
        this.timerTime = setInterval(
            () => {
                this.setState({
                    time: Date.now() - this.state.start,
                })
            }, 1
        )
    }


    stopTimer = () => {
        this.setState({
            on: false,
            // time: this.state.time
        });
        clearInterval(this.timerTime);

    };

    resetTimer = () => {
        this.setState({
            on: false,
            time: 0,
            start: 0
        });
        this.stopTimer();

    };
    render() {
        return (
            <div className="container">
                <h1 id="title">Welcome to the earth time!</h1>
                <h1 id="time"> {ms(this.state.time)}</h1>
                <h2 id="msg">on the earth has passed.</h2>
                <div className="btnGroup">
                    {this.state.on
                        ? <button className="mainbtn" onClick={this.stopTimer}>Stop</button>
                        : <button className="mainbtn" onClick={this.startTimer}>Start</button>

                    }
                    <button className="mainbtn" onClick={this.resetTimer}>Reset</button>
                </div>

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

import React, { Component } from "react";

import Display from "./Display";
import Buttons from "./Buttons";
import Interval from "./Interval";

export default class Counter extends Component {

        state = {
            number: this.props.initNumber || 0,
            interval: this.props.initInterval || 1
        }

        increment = () => {
            this.setState({
                number: this.state.number + this.state.interval
            })
        }
    
        decrement = () => {
            this.setState({
                number: this.state.number - this.state.interval
            })
        }

        setInterval = (newInterval) => {
            this.setState({
                interval: newInterval 
            })
        }
    render () {
        return (
            <div>
                <h2>Counter</h2>
                <Display number={this.state.number}/>
                <Interval interval={this.state.interval} setInterval={this.setInterval} />
                <Buttons increment={this.increment} decrement={this.decrement} />
            </div>
        )
    }
}
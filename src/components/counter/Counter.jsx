import React, { Component } from "react";

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

        setInterval = (event) => {
            this.setState({
                interval: +event.target.value 
            })
        }
    render () {
        return (
            <div>
                <h2>Counter</h2>
                <p>Initial: {this.state.number}</p>
                <label htmlFor="intervalInput"> Interval</label>
                <input
                    id='intervalInput'
                    type="number" 
                    value={this.state.interval}
                    onChange={this.setInterval} />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
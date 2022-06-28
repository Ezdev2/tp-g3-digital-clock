import React, { useState, useEffect } from "react";
import './styles.css';

export default class ClockClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), time: null };
    }

    componentDidMount() {
        this.setState(() => {
            time: setInterval(() => {
                this.setState({ date: new Date()})
            }, 1000) 
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.time);
    }

    render() {
        return (
            <div className="clock-container">
            <p className="clock">
                    <span>{this.state.date.getHours().toString().padStart(2, '0')}</span>:
                    <span>{this.state.date.getMinutes().toString().padStart(2, '0')}</span>:
                    <span>{this.state.date.getSeconds().toString().padStart(2, '0')}</span>
                </p>
            </div>
        );
    }
}
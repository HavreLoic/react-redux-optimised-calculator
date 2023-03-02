import React, { Component } from 'react'
import { Display, ControlPanel, Digits, Operators, History } from '../index'
import '../../../src/Calculator.css';

class Calculator extends Component {
    render() {
        return (
            <main className="react-calculator">
                <Display />
                <ControlPanel />
                <Digits />
                <Operators />
                <History />
            </main>
        )
    }
}

export default Calculator;
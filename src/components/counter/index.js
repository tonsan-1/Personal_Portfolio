import React from 'react'
import CountUp from 'react-countup'
import handleViewport from 'react-in-viewport'
import styled, { keyframes, css } from 'styled-components'
class Counter_Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            start: false,
            inViewport: false,
            animation_complete: false
        }
    }

    componentDidUpdate() {
        if (this.state.inViewport !== this.props.inViewport && !this.state.animation_complete) {
            this.setState({inViewport: this.props.inViewport, value: this.props.state})
            setTimeout(() => { 
                this.setState({start: true, animation_complete: true})
            }
            , this.props.delay);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.animation_complete) {
            return false
        } else {
            return true
        }
    }

    render() {
        const { value, symbol} = this.props

        const Animation = keyframes`
            0%  {color: #04e5e5;}
            10% {color: #f37055;}
            20% {color: #ef4e7b;}
            30% {color: #a166ab;}
            40% {color: #5073b8;}
            50% {color: #04e5e5;}
            60% {color: #07b39b;}
            70% {color: #6fba82;}
            80% {color: #5073b8;}
            90% {color: #1098ad;}
            100% {color: #f37055;}
        `
        const Symbol = styled.span`
            animation: ${this.props.animation ? css`${Animation} 10s infinite alternate` : `none`};
        `

        const CounterContainer = styled.div`
        
        `
        
        return (
            <CounterContainer className="counter">
                <CountUp className="value" start={0} end={this.state.start === true ? value : 0} duration={this.props.duration ? this.props.duration : 1}/>
                <Symbol className="symbol">{symbol}</Symbol>
                {this.text()}
            </CounterContainer>
        )
        
    }

    text() {

        if (this.props.text) {
            const Text = styled.span`
        
            `
            return (
                <div>
                    <Text className="text">{this.props.text}</Text>
                </div>
            )
        }
    }
}

const Counter = handleViewport(Counter_Component);

export default Counter
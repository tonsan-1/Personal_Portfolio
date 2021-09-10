import React from 'react'
import handleViewport from 'react-in-viewport'
import styled, { keyframes } from 'styled-components'

class Animated_Heading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inViewport: false,
            animation_complete: false,
            animate: false,
            force: false
        }
    }

    componentDidUpdate() {
        if (this.state.inViewport !== this.props.inViewport && !this.state.force) {
            if (!this.state.animation_complete) {
                this.setState({inViewport: this.props.inViewport, animate: true, force: true})
                let delay = 1
                this.props.text.split(" ").forEach(function(value, index) {
                    value.split("").forEach(function(v, i) {
                        ++delay
                    })
                })
                setTimeout(() => {
                    this.setState({animation_complete: true})
                }, (delay*200)+500)
            }
        }
        if (this.state.inViewport !== this.props.inViewport && this.state.force) {
            this.setState({animation_complete: true, force: false})
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.animation_complete && !this.props.inViewport) {
            return false
        } else {
            return true
        }
    }

    render() {
        return (
            <h2 style={{textAlign: "center", marginBottom: "20px"}} className="heading">
                {this.animate()}
            </h2>
        )
    }

    animate() {
        const Animation = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                transform: translate(0,0);
                opacity: 1;
            }
        `
        
        const AnimatedLetter = styled.span`
            transform: translate(0, -100px);
            display: inline-block;
            transition: 1s;
            opacity: 0;
            font-size: ${this.props.fontSize ? this.props.fontSize : "100px"};
            line-height: ${this.props.lineHeight ? this.props.lineHeight : "90px"};
            font-family: Teko;
            text-transform: uppercase;
            @media (max-width: 767px) {
                font-size: 40px;
                line-height: 40px;
            }
            &.animation_complete {
                transform: translate(0, 0);
                opacity: 1;
            }
            &.animate {
                animation: ${Animation} forwards 1s;
            }
        `
        const Space = styled.span`
            font-size: 100px;
            margin: 0 ${this.props.space ? this.props.space : "10px"};
            @media (max-width: 767px) {
                font-size: 40px;
                line-height: 40px;
                margin: 0 5px;
            }
        `
        let time = 0;
        return this.props.text.split(" ").map((value, index) => {
            return value.split("").map((v, i) => {
                ++time
                return i+1 !== value.length ? <AnimatedLetter key={i} style={{animationDelay: `${time*100}ms`, color: index % 2 !== 0 || this.props.color ? "#04e5e5" : "#fff"}} className={!this.state.animation_complete ? this.state.animate ? "animate" : "" : "animation_complete"}>{v}</AnimatedLetter> : <span key={i}><AnimatedLetter style={{animationDelay: `${time*100}ms`, color: index % 2 !== 0 || this.props.color ? "#04e5e5" : "#fff"}} className={!this.state.animation_complete ? this.state.animate ? "animate" : "" : "animation_complete"}>{v}</AnimatedLetter><Space /></span>
            })
        })
    }

}
const AnimatedHeading = handleViewport(Animated_Heading);

export default AnimatedHeading
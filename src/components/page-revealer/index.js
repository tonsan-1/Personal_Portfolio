import React from 'react'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import styled, { keyframes } from 'styled-components';

class PageRevealer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            animation : false,
            complete: false,
            hide: false
        }
        this.reveal = this.reveal.bind(this)
    }

    reveal() {
        if (!this.state.complete) {
            this.setState({animation: true, complete: true})
            setTimeout(() => { 
                document.getElementById("reveal_container").style.backgroundColor = "transparent"
                setTimeout(() => { 
                    this.setState({animation: false, hide: true})
                }, 500);
            }, 400);
        }
    }



    baffle() {
        if (!this.state.complete) {
            return (
                <AnimationContainer animation="fadeIn">
                    <BaffleText
                        text="Abstract"
                        revealDuration={500}
                        revealDelay={1000}
                        parentMethod={this.reveal}
                        callMethodTime={2000}
                    />
                </AnimationContainer>
            )
        }
    }

    render() {
        const RevealContainer = styled.div`
            position: fixed;
            z-index: 100;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            background-color: #000;
            opacity: 1;
            visibility: visible;
            overflow-x: hidden !important;
            overflow-y: hidden !important;
            font-size: 50px;
            color: #fff;
            text-transform: uppercase;
            font-weight: 700;
            @media (max-width: 500px) {
                font-size: 30px;
            }
        `;

        const RevealAnimation = keyframes`
            0% {
                transform: translate3d(100%, 0, 0);
            }
            35%, 65% {
                transform: translate3d(0, 0, 0);
            }
            100% {
                transform: translate3d(-100%, 0, 0);
            }
        `
        const Reveal = styled.div`
            position: fixed;
            width: 100%;
            pointer-events: none;
            height: 100%;
            background-color: #04e5e5;
            transform: translateX(100%);
            &.animate {
                animation: ${RevealAnimation} 1.1s cubic-bezier(0.2, 1, 0.3, 1) forwards;
            }
        `
        return (
            <RevealContainer id="reveal_container" style={{display: this.state.hide ? "none" : "flex"}}>
                {this.baffle()}
                <Reveal id="revealer" className={this.state.animation ? "animate" : ""} />
            </RevealContainer>
        )
    }
}

export default PageRevealer
import React from 'react'
import styled, { keyframes } from 'styled-components'
import Baffle from "baffle-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

class DesktopContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            enable: this.props.type === "slider" ? true : false
        }
    }


    enable = () => {
        this.setState({enable: true})
    }
    
    render() {

        const Animation = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                top: 0;
                opacity: 1;
            }
        `
        const Info = styled.div`
            @media (max-width: 1024px) {
                display: none !important;
            }
            position: absolute;
            height: 100%;
            width: 100%;
            top: 40px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
            transition: .5s;
            text-align: center;
            &.active {
                animation: ${Animation} 1s forwards;
                background-image: linear-gradient(to top, rgba(4,229,229,1), rgba(255, 255, 255, 0));
            }
        `

        return (
            <Info 
                onMouseEnter={() => this.setState({show: true})}
                onMouseLeave={() => this.setState({show: false})}
                className={this.state.show ? "active" : ""}
                style={{display: this.state.enable ? "flex" : "none"}}
            >
                {this.show()}
            </Info>
        )
    }

    show() {

        const Name = styled.h4`
            color: #fff;
            font-weight: 600;
            font-size: 25px;
            text-align: center;
            @media (max-width:767px) {
                font-size: 20px;
            }
        `

        const Profession = styled.h5`
            color: #fff;
            font-size: 17px;
            font-weight: 400;
            text-transform: uppercase;
            text-align: center;
            @media (max-width:767px) {
                font-size: 15px;
            }
        `

        const Social = styled.div`
            svg {
                cursor: pointer;
                color: #fff;
                margin: 0 5px;
            }
        `
        if (this.state.show) {
            return (
                <>
                    <Name>
                        <Baffle
                            speed={50}
                            characters="abcdefghijklmnopqrstuvwxyz"
                            obfuscate={false}
                            update={true}
                            revealDuration={1000}
                            revealDelay={0}
                        >
                            {this.props.name}
                        </Baffle>
                    </Name>
                    <Profession>
                        <Baffle
                            speed={50}
                            characters="abcdefghijklmnopqrstuvwxyz"
                            obfuscate={false}
                            update={true}
                            revealDuration={1000}
                            revealDelay={0}
                        >
                            {this.props.profession}
                        </Baffle>
                    </Profession>
                    <Social>
                        <FontAwesomeIcon icon={faFacebook} onClick={() => window.open(this.props.facebook)}/>
                        <FontAwesomeIcon icon={faTwitter} onClick={() => window.open(this.props.twitter)} />
                        <FontAwesomeIcon icon={faLinkedin} onClick={() => window.open(this.props.linkedin)} />
                        <FontAwesomeIcon icon={faGithub} onClick={() => window.open(this.props.github)} />
                    </Social>
                </>
            )
        }
    }
}

export default DesktopContent
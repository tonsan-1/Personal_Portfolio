import React from 'react'
import styled from 'styled-components'
import RevealContent from 'components/reveal-content'
import Tilt from 'react-tilt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import DesktopContent from './DesktopContent.js'

class TeamItem extends React.Component {

    constructor(props) {
        super(props)
        this.showContent = this.showContent.bind(this)
    }

    showContent() {
        setTimeout(() => {
            this.child.enable()
            document.getElementById(`team-item-${this.props.index}`).classList.add("blue-shadow");
        }, 800)
    }


    showImage() {
        const Image = styled.img`
            width: 100%;
            object-fit: cover;
            height: ${this.props.type !== "slider" ? "100%" : "600px"};
            transition: .5s;
            height: 700px;
            @media (max-width:1500px) {
                height: 600px;
            }
            @media (max-width:1024px) {
                height: 400px;
            }
        `
        
        if (this.props.type === "slider") {
            return <Image src={this.props.image} alt={this.props.name} />
        } else {
            return (
                <RevealContent delay={1000} callParentMethod={true} parentMethod={this.showContent}>
                    <Image src={this.props.image} alt={this.props.name} />
                </RevealContent>
            )
        }
    }

    render() {
        

        const Info = styled.div`
            transform: translateY(50px);
            transition: .5s;
            width: 100%;
            text-align: center;
        `
        const Name = styled.h4`
            color: #fff;
            font-weight: 600;
            font-size: 20px;
        `

        const Profession = styled.h5`
            color: #fff;
            font-size: 14px;
            font-weight: 400;
            text-transform: uppercase;
        `

        const MobileContent = styled.div`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            background-image: linear-gradient(to top, rgba(4,229,229,1), rgba(255, 255, 255, 0));
            opacity: 0 !important;
            transition: .5s;
            display: flex;
            align-items: flex-end;
            visibility: visible;
            @media (min-width:1025px) {
                display: none !important;
            }
        }
        `

        const Item = styled.div`
            position: relative;
            min-height: 400px;
            max-height: 400px;
            margin: 25px auto 40px auto;
            @media (max-width:1500px) {
                min-height: 400px;
                max-height: 400px;
            }
            @media (max-width:1024px) {
                min-height: 300px;
                max-height: 300px;
            }
            overflow: hidden;
            max-width: 85%;
            border-radius: 10px;
            &:hover {
                ${Info} {
                    transform: translateY(-10px);
                }
                ${MobileContent} {
                    opacity: 1 !important;
                }
            }
            &.blue-shadow {
                box-shadow: 0 0px 15px rgb(4,229,229,.2);
                transition: .5s;
                &:hover {
                    box-shadow: 0 0px 15px rgb(4,229,229,.5);
                }
                
            }
        `

        const Social = styled.div`
            svg {
                cursor: pointer;
                color: #fff;
                margin: 0 5px;
            }
        `

        if (this.props.type === "slider") {
            return (
                <Tilt options={{ scale: 1, max: 25 }}>
                    <Item className="blue-shadow">
                        {this.showImage()}
                        <MobileContent>
                            <Info>
                                <Name>{this.props.name}</Name>
                                <Profession>{this.props.profession}</Profession>
                                <Social>
                                    <FontAwesomeIcon icon={faFacebook} onClick={() => window.open(this.props.facebook)}/>
                                    <FontAwesomeIcon icon={faTwitter} onClick={() => window.open(this.props.twitter)} />
                                    <FontAwesomeIcon icon={faLinkedin} onClick={() => window.open(this.props.linkedin)} />
                                    <FontAwesomeIcon icon={faGithub} onClick={() => window.open(this.props.github)} />
                                </Social>
                            </Info>
                        </MobileContent>
                        <DesktopContent
                            name={this.props.name}
                            profession={this.props.profession}
                            facebook={this.props.facebook}
                            twitter={this.props.twitter}
                            linkedin={this.props.linkedin}
                            github={this.props.github}
                            ref={(cd) => this.child = cd}
                            type={this.props.type}
                        />
                    </Item>
                </Tilt>
            )
        } else {
            return (
                <Tilt options={{ scale: 1, max: 25 }}>
                    <Item id={`team-item-${this.props.index}`}>
                        {this.showImage()}
                        <MobileContent>
                            <Info>
                                <Name>{this.props.name}</Name>
                                <Profession>{this.props.profession}</Profession>
                                <Social>
                                    <FontAwesomeIcon icon={faFacebook} onClick={() => window.open(this.props.facebook)}/>
                                    <FontAwesomeIcon icon={faTwitter} onClick={() => window.open(this.props.twitter)} />
                                    <FontAwesomeIcon icon={faLinkedin} onClick={() => window.open(this.props.linkedin)} />
                                    <FontAwesomeIcon icon={faGithub} onClick={() => window.open(this.props.github)} />
                                </Social>
                            </Info>
                        </MobileContent>
                        <DesktopContent
                            name={this.props.name}
                            profession={this.props.profession}
                            facebook={this.props.facebook}
                            twitter={this.props.twitter}
                            linkedin={this.props.linkedin}
                            github={this.props.github}
                            ref={(cd) => this.child = cd}
                            type={this.props.type}
                        />
                    </Item>
                </Tilt>
            )
        }
    }
}

export default TeamItem
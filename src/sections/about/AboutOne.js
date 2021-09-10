import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import RevealContent from 'components/reveal-content'
import Counter from 'components/counter'
import AnimationContainer from 'components/animation-container'
import Particles from 'react-particles-js';
class AboutOne extends React.Component {

  shouldComponentUpdate() {
    return false
  }
  
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #000;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }

        `

        const AboutContainer = styled(Container)`
            padding: 250px 0 100px 0;
            @media (min-width:600px) and (max-width:768px) {
                padding: 350px 0 100px 0;
            }
            @media (min-width:769px) and (max-width:1024px) {
              padding: 300px 0 100px 0;
            }
            @media (min-width:1025px) and (max-width:1399px) {
              padding: 400px 0 100px 0;
            }
            @media (max-width:767px) {
                padding: 50px 50px;
            }
        `
        const Heading = styled.h1`
            font-size: 100px;
            line-height: 90px;
            font-family: Teko;
            color: #fff;
            text-transform: uppercase;
            @media (min-width:768px) and (max-width:1399px) {
                font-size: 70px;
                line-height: 70px;
            }
            @media (max-width:767px) {
                font-size: 30px;
                line-height: 30px;
                text-align: center;
            }
        `
        const Color = styled.span`
            color: #04e5e5;
            font-size: 120px;
            line-height: 100px;
            font-family: Teko;
            text-transform: uppercase;
            letter-spacing: 2px;
            @media (min-width:768px) and (max-width:1399px) {
                font-size: 80px;
                line-height: 80px;
            }
            @media (max-width:767px) {
                font-size: 40px;
                line-height: 40px;
            }
        `

        const CounterComponent = styled.div`
            margin: 10px 0;
            @media (max-width:767px) {
                margin: 50px 0;
                text-align:center;
            }
            .value {
                font-size: 120px;
                font-family: Teko;
                color: #fff;
                line-height: 90px;
            }
            .text {
                font-size: 20px;
                color: #fff;
            }
            .symbol {
                color: #04e5e5;
                position: absolute;
                font-size: 39px;
                top: -28px;
            }

        `

        const LeftCol = styled(Col)`
            display: flex;
            align-items: center;
        `

        return(
            <Section id="about">
                <Particles
                    className="particles"
                    params={{
                        "particles": {
                            "number": {
                              "value": 100,
                              "density": {
                                "enable": true,
                                "value_area": 2000
                              }
                            },
                            "color": {
                              "value": ["#03afaf","#04e5e5"]
                            },
                            "shape": {
                              "type": "circle",
                              "stroke": {
                                "width": 0,
                                "color": "#fff"
                              }
                            },
                            "opacity": {
                              "value": 0.5,
                              "random": false,
                              "anim": {
                                "enable": true,
                                "speed": 0.5,
                                "opacity_min": 0.1,
                                "sync": false
                              }
                            },
                            "size": {
                              "value": 8.017060304327615,
                              "random": true,
                              "anim": {
                                "enable": true,
                                "speed": 12.181158184520175,
                                "size_min": 0.1,
                                "sync": true
                              }
                            },
                            "line_linked": {
                              "enable": true,
                              "distance": 150,
                              "color": this.context.theme === "dark" ? "#fff" : "#555",
                              "opacity": 0.5,
                              "width": 1
                            },
                            "move": {
                              "enable": true,
                              "speed": 1,
                              "direction": "none",
                              "random": false,
                              "straight": false,
                              "out_mode": "bounce",
                              "bounce": false,
                              "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                              }
                            }
                          },
                          "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                              "onhover": {
                                "enable": false,
                                "mode": "repulse"
                              },
                              "onclick": {
                                "enable": false,
                                "mode": "push"
                              },
                              "resize": true
                            },
                            "modes": {
                              "grab": {
                                "distance": 400,
                                "line_linked": {
                                  "opacity": 1
                                }
                              },
                              "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                              },
                              "repulse": {
                                "distance": 200,
                                "duration": 0.4
                              },
                              "push": {
                                "particles_nb": 4
                              },
                              "remove": {
                                "particles_nb": 2
                              }
                            }
                          },
                          "retina_detect": true
                }}/>
                <AboutContainer>
                    <Row>
                        <LeftCol md={6}>
                            <RevealContent>
                                <Heading>
                                    Renowned <Color>Software</Color> Company From <Color>London</Color>
                                </Heading>
                            </RevealContent>
                        </LeftCol>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <AnimationContainer animation="fadeInLeft" delay={1000}>
                                        <CounterComponent style={{marginBottom: "100px"}}>
                                            <Counter value={5} duration={5} delay={1000} symbol="+" text="5 Years of Experience" />
                                        </CounterComponent>
                                    </AnimationContainer>
                                </Col>
                                <Col md={6}>
                                    <AnimationContainer animation="fadeInRight" delay={1000}>
                                        <CounterComponent style={{marginBottom: "100px"}}>
                                            <Counter value={100} duration={5} delay={1000} symbol="+" text="Clients Worked With" />
                                        </CounterComponent>
                                    </AnimationContainer>
                                </Col>
                                <Col md={6}>
                                    <AnimationContainer animation="fadeInLeft" delay={1000}>
                                        <CounterComponent>
                                            <Counter value={15} duration={5} delay={1000} text="Team Members" />
                                        </CounterComponent>
                                    </AnimationContainer>
                                </Col>
                                <Col md={6}>
                                    <AnimationContainer animation="fadeInRight" delay={1000}>
                                        <CounterComponent>
                                            <Counter value={10} duration={5} delay={1000} symbol="+" text="Honourable Awards" />
                                        </CounterComponent>
                                    </AnimationContainer>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </AboutContainer>
            </Section>
        )
    }

}

export default AboutOne
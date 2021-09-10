import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import RevealContent from 'components/reveal-content'
import { StaticQuery, graphql } from 'gatsby'
import Counter from 'components/counter'
import AnimationContainer from 'components/animation-container'
import TabsPart from 'sections/about/parts/TabsPart'

class AboutPersonal extends React.Component {


    shouldComponentUpdate() {
        return false
    }
      
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #050505;
            padding-top: 50px;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            @media (max-width: 767px) {
                padding: 80px 20px;
            }
            @media (max-width: 500px) {
                padding: 0 20px;
            }
        `

        const CounterRow = styled(Row)`
            margin-top: 100px;
            background-color: #000;
            padding: 100px 0;
            @media (max-width: 500px) {
                margin-top: 0;
            }

        `
        
        const AboutContainer = styled(Container)`
            padding: 100px 0;
            @media (max-width: 500px) {
                padding: 50px 0;
            }
        `

        const CounterComponent = styled.div`
            margin: 10px 0;
            text-align: center;
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
                @media (max-width: 500px) {
                    top: 0;
                }
            }

        `

        const LeftCol = styled(Col)`
            display: flex;
            align-items: baseline;
            justify-content: center;
            @media (max-width: 500px) {
                margin-bottom: 50px;
            }
        `


        const AnimatedShadow = keyframes`
            0%   {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            10%  {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
            20%  {box-shadow: 0 28px 60px rgba(239, 78, 123, .5);}
            30%  {box-shadow: 0 28px 60px rgba(161, 102, 171, .5);}
            40% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            50% {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            60% {box-shadow: 0 28px 60px rgba(7, 179, 155, .5);}
            70% {box-shadow: 0 28px 60px rgba(111, 186, 130, .5);}
            80% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            90% {box-shadow: 0 28px 60px rgba(16, 152, 173, .5);}
            100% {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
        `
        const ImageContainer = styled.div`
            border-radius: 20px;
            overflow: hidden;
            animation: ${AnimatedShadow} 10s infinite alternate;
            @media (max-width: 767px) {
                margin-bottom: 50px;
            }
        `

        const Image = styled.img`
            max-width: 400px;
            @media (max-width: 767px) {
                max-width: 200px;
            }
            @media (max-width: 1400px) {
                max-width: 280px;
            }
        `

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 20px;
        `

        const Heading = styled.h2`
            font-size: 70px;
            font-family: Teko;
            color: #fff;
            line-height: 50px;
        `

        const Text = styled.p`
            font-size: 12px;
            font-weight: 300;
            color: #c5c5c5;
        `

        return(
            <Section id="about">
                <AboutContainer>
                    <Row>
                        <LeftCol md={6}>
                            <AnimationContainer animation="fadeIn">
                                <ImageContainer>
                                    <RevealContent delay={500}>
                                        <Image src={this.props.image.childImageSharp.fluid.src} alt="about" />
                                    </RevealContent>
                                </ImageContainer>
                            </AnimationContainer>
                        </LeftCol>
                        <Col md={6}>
                            <AnimationContainer animation="fadeIn">
                                <Heading>About Me</Heading>
                                <Separator />
                                <Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                    It was popularised in the 1960s with the release of 
                                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Text>
                                <TabsPart />
                            </AnimationContainer>
                        </Col>
                    </Row>
                </AboutContainer>
                <CounterRow>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={5} duration={5} delay={1000} symbol="+" text="5 Years of Experience" animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={100} duration={5} delay={1000} symbol="+" text="Clients Worked With" animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={5} duration={5} delay={1000} text="Certifications" animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={10} duration={5} delay={1000} symbol="+" text="Honourable Awards" animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </CounterRow>
            </Section>
        )
    }
}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        image: file(relativePath: {eq: "about-me.jpg"}) {
          childImageSharp {
            fluid(maxHeight: 2000) {
              src
            }
          }
        }
      }
      `}
      render={({ image }) => <AboutPersonal  image={image} {...props} />}
    />
  )
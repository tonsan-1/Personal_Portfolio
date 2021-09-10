import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Typewriter from 'typewriter-effect'
import LoopVideo from './assets/loop.mp4'
import Glitch from 'components/glitch'
class HeroPersonalVideo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }
    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({height: window.innerHeight})
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({width: window.innerWidth})
        }
    }

    
    componentDidMount() {
        this.setState({height: window.innerHeight, width: window.innerWidth})
        window.addEventListener('resize', this.updateDimensions)
        document.body.addEventListener('mousemove', (e) => {
            var amountMovedX = (e.clientX * -.1 / 8);
            var amountMovedY = (e.clientY * -.1 / 8);
            var x = document.getElementsByClassName("parallax-hero-item");
            var i;
            for (i = 0; i < x.length; i++) {
              x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
            }
        });
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {

        const Section = styled.section`
            position: relative;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }

            background-size: cover;
            background-repeat: no-repeat;
        `

        const VideoContainer = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative;
            video {
                position: absolute;
            }
        `
        const Heading = styled.div`
            .glitch {
                font-size: 140px;
                line-height: 140px;
                font-weight: 600;
                color: #fff;
                @media (max-width: 767px) {
                    font-size: 40px;
                    line-height: 50px;
                }
            }
        `

        const SubHeading = styled.h2`
            font-size: 18px;
            font-weight: 300;
            color: #ccc;
            text-transform: uppercase;
            letter-spacing: 4px;
        `
        const Type = styled.div`
            font-size: 50px;
            line-height: 50px;
            color: #fff;
            text-transform: uppercase;
            margin-left: 6px;
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 23px;
                line-height: 20px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
            span {
                font-family: Teko;
            }
        `
        const gradientAnimation = keyframes`
            0% {
              background-position: 15% 0%;
            }
            50% {
              background-position: 85% 100%;
            }
            100% {
              background-position: 15% 0%;
            }
          `
          

        const HeadingBox = styled.div`
            height: 500px;
            width: 900px;
            margin: auto;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: 5px;
                background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
                background-size: 300% 300%;
                clip-path: polygon(0% 100%, 10px 100%, 10px 10px, calc(100% - 10px) 10px, calc(100% - 10px) calc(100% - 10px), 10px calc(100% - 10px), 10px 100%, 100% 100%, 100% 0%, 0% 0%);
            }
            &.animate:after {
                animation: ${gradientAnimation} 2s ease-in-out infinite;
            }
            @media (max-width: 767px) {
                height: 350px;
            }
        `

        const Resume = styled.a`
            color: #fff;
            text-decoration: none;
            border-bottom: 2px solid;
            font-weight: 300;
            transition: .5s;
            margin-top: 40px;
            &:hover {
                color: #fff;
                text-decoration: none;
                border-color: #04e5e5;
            }
        `

        return (
            <Section id="home">
                <VideoContainer style={{height: `${this.state.width > 500 ? this.state.height : 350}px`}}>
                    <video autoPlay="autoplay" loop="loop" muted style={{height: `${this.state.width >= 1024 && this.state.width < 1200 ? "100%": "auto"}`}}>
                        <source src={LoopVideo} type="video/mp4" />
                    </video>
                    <HeadingBox  className="parallax-hero-item animate">
                        <SubHeading className="parallax-hero-item">
                            Hello, I'm
                        </SubHeading>
                        <Heading className="parallax-hero-item">
                            <Glitch text="John Doe" />
                        </Heading>
                        <Type className="parallax-hero-item">
                            <Typewriter
                                options={{
                                strings: [
                                    'App Developer',
                                    'Web Designer',
                                    'UX Developer',
                                ],
                                autoStart: true,
                                loop: true,
                                }}
                            />
                        </Type>
                        <Resume href="./">
                            Download Resume
                        </Resume>
                    </HeadingBox>
                    {this.shapes()}
                </VideoContainer>
            </Section>
        )
    }

    shapes() {

        const MoveUp = keyframes`
            0% { 
                transform: translateY(0);
            }
            100% {
                transform: translateY(-40px);
            }
        `

        const MoveDown = keyframes`
            0% { 
                transform: translateY(0);
            }
            100% {
                transform: translateY(40px);
            }
        `
        const Shape = styled.img`
            position: absolute;
            height: 50px;
            &.move-up {
                animation: ${MoveUp} 5s infinite  alternate;
            }
            &.move-down {
                animation: ${MoveDown} 5s infinite  alternate;
            }
            @media (max-width: 767px) {
                height: 20px;
            }
        `
        


        return this.props.shapes.map((value, index) => {
            return (
                <Shape
                    style={{
                        left: `${(index+1) * 10}%`,
                        bottom: `${Math.random() *
                        (+((index+1) % 2 === 0 ? 10 : 90) - +((index+1) % 2 === 0 ? 5 : 80)) +
                        +((index+1) % 2 === 0 ? 5 : 80)}%`,
                    }}
                    key={index}
                    src={value.node.childImageSharp.fluid.src}
                    alt="shape"
                    className={Math.floor(Math.random() * 10) % 2 === 0 ? "move-up" : "move-down"}
                />
            )
        })
    }
}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        shapes: allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "shapes"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
        }
      }    
      `}
      render={({ shapes }) => <HeroPersonalVideo shapes={shapes.edges} {...props} />}
    />
  )
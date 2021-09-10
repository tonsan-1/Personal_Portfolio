import React from 'react'
import Helmet from 'react-helmet'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

class Error404 extends React.Component {
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
    }

    
    componentDidMount() {
        this.setState({height: window.innerHeight})
        window.addEventListener('resize', this.updateDimensions)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }


    render() {

        const Heading1 = styled.h1`
            font-size: 80px;
            font-family: Teko;
            line-height: 40px;
            color: #fff;
            font-weight: 400;
            text-transform: uppercase;
            text-align: center;
            @media (min-width:768px) {
                margin-left: 4px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 40px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
        `

        const Main = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            background-color: #000;
        `

        const Heading2 = styled.h2`
            font-size: 120px;
            color: #fff;
            font-weight: 700;
            text-transform: uppercase;
            text-align: center;
            background: -webkit-linear-gradient(left, #00ffff , #007a7a);
            background: -o-linear-gradient(right, #00ffff, #007a7a);
            background: -moz-linear-gradient(right, #00ffff, #007a7a);
            background: linear-gradient(to right, #00ffff , #007a7a); 
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
            @media (max-width:767px) {
                font-size: 40px;
                line-height: 40px;
            }
           @media (min-width:768px) and (max-width:1500px) {
                font-size: 70px;
            }
        `

        const Content = styled.div`
            position: relative;
            z-index: 10
        `

        return (
            <div>
                <Helmet>
                    <title>Error 404</title>
                    <meta name="description" content="Page not found" />
                </Helmet>
                <Main style={{height: `${this.state.height}px`}}>
                    <Container>
                        <Content>
                            <Heading1>
                                Error 404
                            </Heading1>
                            <Heading2>
                                Page Not Found
                            </Heading2>
                        </Content>
                    </Container>
                </Main>
            </div>
        )
    }
}

export default Error404


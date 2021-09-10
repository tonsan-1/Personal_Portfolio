import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import BaffleText from 'components/baffle-text'

class TestimonialsThreePart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 0
        }
    }
    render() {

        return(
            <Container>
                {this.testimonials()}
            </Container>
        )
    }

    testimonials() {

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

        const Gradient = styled.div`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
            background-size: 300% 300%;
            clip-path: polygon(0% 100%, 10px 100%, 10px 10px, calc(100% - 10px) 10px, calc(100% - 10px) calc(100% - 10px), 10px calc(100% - 10px), 10px 100%, 100% 100%, 100% 0%, 0% 0%);
            animation: ${gradientAnimation} 5s ease-in-out infinite;
        
        `


        const TestimonialBox = styled.div`
            min-height: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            @media (max-width:767px) {
                min-height: 400px;
                padding: 0;
            }
        `

        const ImageBox = styled.div`
            background-color: #fff;
            min-height: 500px;
            max-height: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            overflow: hidden;
            @media (max-width:767px) {
                min-height: 400px;
                padding: 0;
            }
        `

        const QuotationUp = styled.img`
            position: absolute;
            height: 100px;
            width: 100px;
            top: 15px;
            left: 20px;
            object-fit: contain;
            opacity: .1;
            @media (max-width:767px) {
                height: 50px;
                width: 50px;
            }
        `

        const QuotationDown = styled.img`
            position: absolute;
            height: 100px;
            width: 100px;
            bottom: 15px;
            right: 20px;
            object-fit: contain;
            opacity: .1;
            @media (max-width:767px) {
                height: 50px;
                width: 50px;
            }
        `
        const TestimonialCol = styled(Col)`
            padding: 0;
        `

        const Image = styled.img`
            height: 100%;
            width: 100%;
            object-fit: cover;
            @media (min-width:768px) {
                min-height: 500px;
                max-height: 500px;
            }
            @media (max-width:768px) {
                min-height: 400px;
                max-height: 400px;
            }
        `

        const Fade = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

        const TestimonialRow = styled(Row)`
            animation: ${Fade} 1s forwards;
            margin-top: 50px;
        `
        
        const TestimonialText = styled.div`
            color: #eee;
            line-height: 25px;
            max-width: 80%;
            margin: 0 auto 10px auto;
            text-align: center;
            span {
                font-size: 16px;
                @media (max-width: 500px) {
                    font-size: 14px;
                    line-height: 20px;
                }
            }
        `

        const TestimonialClient = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
        `
        
        const TestimonialClientInfo = styled.div`
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
        `

        const TestimonialClientName = styled.p`
            color: #eee;
            margin-bottom: 0;
            font-weight: 600;
            font-size: 20px;
        `

        const TestimonialClientProfession = styled.p`
            color: #ccc;
            margin-bottom: 0;
        `

        const Selectors = styled.div`
            display: flex;
            justify-content: center;
            position: relative;
            top: 10px;
            @media (min-width: 1200px) {
                top: 50px;
            }
        `

        return this.props.testimonials.map((value, index) => {
            if (index === this.state.active) {
                return (
                    <TestimonialRow key={index}>
                        <TestimonialCol md={6}>
                            <ImageBox>
                                <Image src={value.content.frontmatter.large.childImageSharp.fluid.src} alt={value.content.frontmatter.name} />
                            </ImageBox>
                        </TestimonialCol>
                        <TestimonialCol md={6}>
                            <TestimonialBox>
                                <QuotationUp src={this.props.quotation_up.childImageSharp.fluid.src} alt="quotation up" />
                                <TestimonialText>
                                    {value.content.frontmatter.text}
                                </TestimonialText>
                                <TestimonialClient>
                                    <TestimonialClientInfo>
                                        <TestimonialClientName>
                                            <BaffleText
                                                text={value.content.frontmatter.name}
                                                revealDuration={1000}
                                                revealDelay={0}
                                                characters="AaBbCcDeEeFfGgHhIiJjKkLlMmNnOpPpQqRrSsTtUuVvWwXxYyZ"
                                            />
                                        </TestimonialClientName>
                                        <TestimonialClientProfession>
                                            <BaffleText
                                                text={value.content.frontmatter.profession}
                                                revealDuration={1000}
                                                revealDelay={0}
                                                characters="AaBbCcDeEeFfGgHhIiJjKkLlMmNnOpPpQqRrSsTtUuVvWwXxYyZ"
                                            />
                                        </TestimonialClientProfession>
                                    </TestimonialClientInfo>
                                </TestimonialClient>
                                <Selectors>
                                    {this.selectorButtons()}
                                </Selectors>
                                <QuotationDown src={this.props.quotation_down.childImageSharp.fluid.src} alt="quotation down" />
                                <Gradient />
                            </TestimonialBox>
                        </TestimonialCol>
                    </TestimonialRow>
                )
            } else {
                return null
            }
        })
    }
   
    selectorButtons() {
        const Selector = styled.button`
            background-color: #fff;
            height: 15px;
            width: 15px;
            border-radius: 7.5px;
            border: none;
            transition: .5s;
            margin: 0 5px;
            &:hover, &.active {
                background-color: #04e5e5;
            }
            &:focus {
                outline: none;
            }
        `
        return this.props.testimonials.map((value, index) => {
            return (
                <Selector key={index} onClick={() => this.setState({active: index})} className={this.state.active === index ? "active" : ""}/>
            )
        })
    }

}

export default TestimonialsThreePart
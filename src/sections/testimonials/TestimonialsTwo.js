import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import RevealContent from 'components/reveal-content'
import AnimationContainer from 'components/animation-container'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class TestimonialsTwo extends React.Component {


    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #000;
            background-size: cover;
            .heading {
                width: 100%;
                min-height: 500px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 20px;
                @media (max-width: 767px) {
                    min-height: inherit;
                    margin-bottom: 50px;
                }
            }
          }
        `

        const TestimonialContainer = styled.div`
            padding: 100px 0;
            @media (max-width: 767px) {
                padding: 50px 10px;
            }
        `

        const Heading = styled.h1`
            font-size: 150px;
            line-height: 120px;
            font-family: Teko;
            color: #fff;
            text-transform: uppercase;
            text-align: center;
            width: 100%;
            margin-bottom: 0;
            @media (min-width:768px) and (max-width:1399px) {
                font-size: 70px;
                line-height: 70px;
            }
            @media (max-width:767px) {
                font-size: 40px;
                line-height: 40px;
                text-align: center;
            }
        `
        const Color = styled.span`
            color:  #04e5e5;
            font-size: 155px;
            line-height: 120px;
            font-family: Teko;
            text-transform: uppercase;
            letter-spacing: 2px;
            @media (min-width:768px) and (max-width:1399px) {
                font-size: 70px;
                line-height: 70px;
            }
            @media (max-width:767px) {
                font-size: 40px;
                line-height: 40px;
            }
        `

        const TestimonialBox = styled.div`
            padding: 50px;
            background-color: #04e5e5;
            min-height: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            @media (max-width:767px) {
                min-height: 700px;
                padding: 20px;
            }
        `

        const QuotationUp = styled.img`
            position: absolute;
            height: 100px;
            width: 100px;
            top: 5px;
            left: 10px;
            object-fit: contain;
            opacity: .7;
        `

        const QuotationDown = styled.img`
            position: absolute;
            height: 100px;
            width: 100px;
            bottom: 5px;
            right: 10px;
            object-fit: contain;
            opacity: .7;
        `
        const settings = {
            dots: true,
            swipe: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 10000,
            loop: true,
        }
        return(
            <Section id="testimonials">
                <TestimonialContainer>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <RevealContent className="heading">
                                    <Heading>
                                        <Color>Reveiews</Color> By our clients
                                    </Heading>
                                </RevealContent>
                            </Col>
                            <Col md={6}>
                                <TestimonialBox>
                                        <QuotationUp src={this.props.quotation_up.childImageSharp.fluid.src} alt="quotation up" />
                                        <AnimationContainer animation="fadeIn">
                                        <Slider {...settings}>
                                            {this.testimonials()}
                                        </Slider>
                                        </AnimationContainer>
                                        <QuotationDown src={this.props.quotation_down.childImageSharp.fluid.src} alt="quotation down" />
                                </TestimonialBox>
                            </Col>
                        </Row>
                    </Container>
                </TestimonialContainer>
            </Section>
        )
    }

    testimonials() {

        const TestimonialItem = styled.div`
        
        `
        const TestimonialText = styled.p`
            color: #333;
            font-size: 18px;
            font-weight: 400;
            line-height: 25px;
            text-align: center;
        `

        const TestimonialClient = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
        `

        const TestimonialImg = styled.img`
            height: 70px;
            width: 70px;
            border-radius: 40px;
        `
        
        const TestimonialClientInfo = styled.div`
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-left: 20px;
        `

        const TestimonialClientName = styled.p`
            margin-bottom: 0;
            font-weight: 600;
            font-size: 20px;
        `

        const TestimonialClientProfession = styled.p`
            margin-bottom: 0;
        `
        
        return this.props.testimonials.map((value, index) => {
            return (
                <TestimonialItem key={index}>
                    <TestimonialText>
                        {value.content.frontmatter.text}
                    </TestimonialText>
                    <TestimonialClient>
                        <TestimonialImg src={value.content.frontmatter.image.childImageSharp.fluid.src} alt={value.content.frontmatter.name} />
                        <TestimonialClientInfo>
                            <TestimonialClientName>{value.content.frontmatter.name}</TestimonialClientName>
                            <TestimonialClientProfession>{value.content.frontmatter.profession}</TestimonialClientProfession>
                        </TestimonialClientInfo>
                    </TestimonialClient>
                </TestimonialItem>
            )
        })
    }

}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        quotation_up: file(relativePath: {eq: "quotation-up.png"}) {
            childImageSharp {
              fluid(maxWidth: 500) {
                src
              }
            }
          }
          quotation_down: file(relativePath: {eq: "quotation-down.png"}) {
            childImageSharp {
              fluid(maxWidth: 500) {
                src
              }
            }
          }
          testimonials: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(testimonials)/"}}, sort: {fields: [frontmatter___id], order: ASC}) {
            edges {
              content: node {
                frontmatter {
                  id
                  name
                  profession
                  text
                  image {
                    childImageSharp {
                      fluid(maxWidth: 200, maxHeight: 200) {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
      }      
      `}
      render={({ quotation_up, quotation_down, testimonials }) => <TestimonialsTwo quotation_up={quotation_up} quotation_down={quotation_down} testimonials={testimonials.edges} {...props} />}
    />
  )
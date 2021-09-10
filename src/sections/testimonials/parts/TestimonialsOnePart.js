import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

class TestimonialPart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0
        }
    }
    
    render() {

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
            opacity: .7 !important;
        `

        const QuotationDown = styled.img`
            position: absolute;
            height: 100px;
            width: 100px;
            bottom: 5px;
            right: 10px;
            object-fit: contain;
            opacity: .7 !important;
        `
        const SelectorContainer = styled.div`
            display: flex;
            justify-content: center;
            position: relative;
            top: 50px;
        `

        return (
            <TestimonialBox>
                <QuotationUp src={this.props.quotation_up.childImageSharp.fluid.src} alt="quotation up" />
                {this.testimonials()}
                <QuotationDown src={this.props.quotation_down.childImageSharp.fluid.src} alt="quotation down" />
                <SelectorContainer>
                    {this.selectors()}
                </SelectorContainer>
            </TestimonialBox>
        )
    }

    testimonials() {

        const TestimonialItem = styled.div`
            display: none;
            transition: .5s;
            &.active {
                display: block;
            }
        `

        const TestimonialText = styled.p`
            color: #333;
            font-size: 25px;
            font-weight: 400;
            line-height: 35px;
            text-align: center;
            @media (max-width: 500px) {
                font-size: 20px;
                line-height: 25px;
            }
        `

        const TestimonialClient = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
        `
        
        const TestimonialClientInfo = styled.div`
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
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
                <TestimonialItem key={index} className={this.state.active === index ? "active" : ""}>
                    <TestimonialText>
                        {value.content.frontmatter.text}
                    </TestimonialText>
                    <TestimonialClient>
                        <TestimonialClientInfo>
                            <TestimonialClientName>{value.content.frontmatter.name}</TestimonialClientName>
                            <TestimonialClientProfession>{value.content.frontmatter.profession}</TestimonialClientProfession>
                        </TestimonialClientInfo>
                    </TestimonialClient>
                </TestimonialItem>
            )
        })
    }


    selectors() {
        
        return this.props.testimonials.map((value, index) => {
            const Selector = styled.img`
                height: 50px;
                width: 50px;
                border-radius: 25px;
                margin: 0 5px;
                border: 2px solid #555;
                transition: .5s;
                cursor: pointer;
                &:hover {
                    border-color: #fff;
                }
                &.active {
                    border-color: #fff;
                }
            `
            return (
                <Selector
                    key={index}
                    src={value.content.frontmatter.image.childImageSharp.fluid.src}
                    alt={value.content.frontmatter.name}
                    onClick={() => this.setState({active: index})}
                    className={this.state.active === index ? "active" : ""}
                />
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
         }      
      `}
      render={({ quotation_up, quotation_down }) => <TestimonialPart quotation_up={quotation_up} quotation_down={quotation_down}{...props} />}
    />
  )
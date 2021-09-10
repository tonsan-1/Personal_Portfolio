import React from 'react'
import { Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'
import TestimonialsThreePart from './parts/TestimonialsThreePart.js'
import AnimatedHeading from 'components/animated-heading'

class TestimonialsThree extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 0
        }
    }
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #000;
            background-size: cover;
        `

        const TestimonialContainer = styled.div`
            padding: 100px 0;
            @media (max-width: 767px) {
                padding: 50px 10px;
            }
        `




        return(
            <Section id="testimonials">
                <TestimonialContainer>
                    <Container>
                      <AnimatedHeading text="Recent testimonials" />
                      <AnimationContainer animation="fadeIn">
                        <TestimonialsThreePart testimonials={this.props.testimonials} quotation_up={this.props.quotation_up} quotation_down={this.props.quotation_down}  />
                      </AnimationContainer>
                    </Container>
                </TestimonialContainer>
            </Section>
        )
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
                  large {
                    childImageSharp {
                      fluid(maxWidth: 2000, maxHeight: 2000) {
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
      render={({ quotation_up, quotation_down, testimonials }) => <TestimonialsThree quotation_up={quotation_up} quotation_down={quotation_down} testimonials={testimonials.edges} {...props} />}
    />
  )
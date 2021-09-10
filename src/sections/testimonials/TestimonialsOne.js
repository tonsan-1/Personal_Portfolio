import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import RevealContent from 'components/reveal-content'
import TestimonialsOnePart from 'sections/testimonials/parts/TestimonialsOnePart.js'
import AnimatedHeading from 'components/animated-heading'

class TestimonialsOne extends React.Component {

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
            .heading {
              margin-bottom: 50px !important;
            }
          }
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
                        <Row>
                            <Col md={12}>
                                <AnimatedHeading text="Recent testimonials" />
                            </Col>
                            <Col md={12}>
                                <RevealContent>
                                    <TestimonialsOnePart testimonials={this.props.testimonials} />
                                </RevealContent>
                            </Col>
                        </Row>
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
              fluid(maxWidth: 4000, quality: 100) {
                src
              }
            }
          }
          quotation_down: file(relativePath: {eq: "quotation-down.png"}) {
            childImageSharp {
              fluid(maxWidth: 4000, quality: 100) {
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
      render={({ quotation_up, quotation_down, testimonials }) => <TestimonialsOne quotation_up={quotation_up} quotation_down={quotation_down} testimonials={testimonials.edges} {...props} />}
    />
  )
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import PortfolioItem from 'sections/portfolio/parts/PortfolioItem.js'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AnimatedHeading from 'components/animated-heading'
import AnimationContainer from 'components/animation-container'

class PortfolioThree extends React.Component {
    
    render() {

        const Section = styled.section`
          background-color: #050505;
          padding: 100px 0;
        `
        const PortfolioContainer = styled.div`
            .slick-slide {
              display: block;
              margin: 0px 0 70px 0px;
            }
            .slick-dots {
              bottom: 0;
              li button:before,.slick-dots li.slick-active button:before {
                color: #04e5e5;
              }
            }
          }
        `


        const settings = {
            dots: true,
            swipe: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 10000,
            loop: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        }
        
        return (
            <Section id="portfolio">
                  <Col md={12} style={{padding: 0}}>
                    <Container>
                      <AnimatedHeading text="Certificates" />
                    </Container>
                    <PortfolioContainer>
                      <AnimationContainer animation="fadeIn">
                        <Slider {...settings}>
                          {this.portfolio()}
                        </Slider>
                      </AnimationContainer>
                    </PortfolioContainer>
                </Col>
            </Section>
        )
    }

  portfolio() {
      const { items } = this.props
      const links = [
        'https://softuni.bg/certificates/details/80097/c58b86bc',
        'https://softuni.bg/certificates/details/83345/2d73efb8',
        'https://softuni.bg/certificates/details/86596/8f890a59',
        'https://softuni.bg/certificates/details/90537/a9501aa2',
        'https://softuni.bg/certificates/details/95198/537ae544',
        'https://softuni.bg/certificates/details/97986/d8c58a94',
        'https://softuni.bg/certificates/details/101572/0b4dfc56',
        'https://softuni.bg/certificates/details/102686/a8eba99b',
        'https://softuni.bg/certificates/details/105798/565b80d9',
        'https://softuni.bg/certificates/details/109499/702f0f82',
        'https://softuni.bg/certificates/details/113465/764b6ccb',


      ]

      return items.map((value, index) => {
        return (
          <PortfolioItem 
            key={index}
            index={index} 
            image={value.content.frontmatter.image.childImageSharp.fluid.src} 
            link= {links[index]}
            type="slider"
          />
        )
      })
    }
}

export default props => (
  <StaticQuery
      query={graphql`
          query {
              items: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio)/"}}, sort: {fields: [frontmatter___id], order: ASC}, limit: 11) {
                edges {
                  content: node {
                    frontmatter {
                      id
                      title
                      category
                      link
                      image {
                        childImageSharp {
                          fluid(maxWidth: 1000) {
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
      render={({ items }) => <PortfolioThree items={items.edges} {...props} />}
  />
)
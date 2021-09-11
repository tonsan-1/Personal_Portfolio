import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import PortfolioItem from 'sections/portfolio/parts/PortfolioItem.js'
import AnimatedHeading from 'components/animated-heading'

class PortfolioOne extends React.Component {
    
    render() {

        const Section = styled.section`
          background-color: #050505;
          padding: 100px 0;
        `
        const PortfolioContainer = styled.div`
            padding: 0 50px;
            @media (max-width:767px) {
              padding: 0 50px;
            }
        `

        return (
            <Section id="portfolio">
                  <Col md={12}>
                    <Container>
                      <AnimatedHeading text="Recent Projects" />
                    </Container>
                  <PortfolioContainer>
                      <Row>
                        {this.portfolio()}
                      </Row>
                  </PortfolioContainer>
                </Col>
            </Section>
        )
    }

  portfolio() {
      
        return (
          <Row>
            <Col md={6} key={123}>
              <PortfolioItem 
                index={1} 
                image='/img/endlesstv.jpg'
                text='EndlessTV - Online Movies' 
                category='React JS'
                link='https://endlesstv.web.app/'
                type="col"
              />
              
          </Col>
          <Col md={6} key={321}>
              <PortfolioItem 
                index={2} 
                image='/img/jobzy.jpg'
                text='Jobzy - Freelance Marketplace' 
                category='ASP.NET Core'
                link='https://jobzy.azurewebsites.net/'
                type="col"
              />
          </Col>
          </Row>
        )
    }
}

export default props => (
  <StaticQuery
      query={graphql`
          query {
              items: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio)/"}}, sort: {fields: [frontmatter___id], order: ASC}, limit: 2) {
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
      render={({ items }) => <PortfolioOne items={items.edges} {...props} />}
  />
)
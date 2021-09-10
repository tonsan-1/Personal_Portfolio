import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import AnimationContainer from 'components/animation-container'

class ClientsTwo extends React.Component {


    shouldComponentUpdate() {
      return false
    }
      

    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #111;
            background-size: cover;
            padding: 100px 0;
            .heading {
                width: 100%;
            }
          }
        `

        const ClientsContainer = styled(Container)`
            margin: 40px auto;
        `


        return(
            <Section id="clients">
                <AnimatedHeading text="Honourable clients" />
                  <ClientsContainer>
                    <Row>
                      <Col md={{ span: 10, offset: 1 }}>
                      <Row>
                        {this.clients()}
                      </Row>
                      </Col>
                    </Row>
                  </ClientsContainer>
            </Section>
        )
    }

    clients() {
      return this.props.clients.map((value, index) => {
        const Client = styled.img`
            height: 150px;
            @media (min-width: 768px) and (max-width: 1024px) {
              height: 100px;
            }
        `

        const ClientCol = styled(Col)`
            text-align: center;
            padding: 20px 0;
            border-color: #efefef;
            border-left: none;
            border-top: none;
            transition: .1s;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
              transform: scale(1.1);
              background-color: #04e5e5;
              z-index: 5;
              border-radius: 10px;
            }
            @media (max-width: 500px) {
              border: none !important;
            }
        `
          return (
              <ClientCol md={3} key={index} style={{borderRight: (index+1)%4 === 0 ? "none" : "1px solid", borderBottom: index < 8 ? "1px solid" : "none"}}>
                  <AnimationContainer animation="fadeIn slower" delay={index*200}>
                    <Client
                      src={value.node.childImageSharp.fluid.src}
                      alt="Client"
                    />
                  </AnimationContainer>
              </ClientCol>
          )
      })
    }

}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        clients: allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "clients"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 500) {
                  src
                }
              }
            }
          }
        }
      }      
      `}
      render={({ clients }) => <ClientsTwo clients={clients.edges} {...props} />}
    />
  )
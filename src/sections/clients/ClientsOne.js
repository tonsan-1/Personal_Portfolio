import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'

class ClientsOne extends React.Component {


    shouldComponentUpdate() {
      return false
    }
  

    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #050505;
            background-size: cover;
            padding: 100px 0;
            .heading {
                width: 100%;
            }
          }
        `

        
        const Heading = styled.h1`
            font-size: 110px;
            line-height: 100px;
            font-family: Teko;
            color: #fff;
            text-transform: uppercase;
            text-align: center;
            width: 100%;
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
          font-size: 120px;
          line-height: 80px;
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

      const LeftCol = styled(Col)`
          display: flex;
          align-items: center;
      `


        return(
            <Section id="clients">
                  <Container>
                    <Row>
                      <LeftCol md={6}>
                        <Heading>
                          <Color>Clients</Color> we worked with
                        </Heading>
                      </LeftCol>
                      <Col md={6}>
                        <Row>
                          {this.clients()}
                        </Row>
                      </Col>
                    </Row>
                  </Container>
            </Section>
        )
    }

    clients() {
      return this.props.clients.map((value, index) => {
        const Client = styled.img`
            height: 100px;
        `

        const ClientCol = styled(Col)`
            text-align: center;
            padding: 20px 0;
            border-color: #efefef;
            border-left: none;
            border-top: none;
            transition: .1s;
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
      render={({ clients }) => <ClientsOne clients={clients.edges} {...props} />}
    />
  )
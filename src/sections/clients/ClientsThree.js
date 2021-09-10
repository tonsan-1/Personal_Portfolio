import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import AnimationContainer from 'components/animation-container'

class ClientsThree extends React.Component {


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

        const ClientsContainer = styled(Container)`
            margin: 40px auto;
        `

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

        const ClientsRow = styled(Row)`
            background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 5s ease-in-out infinite;
        `
      


        return(
            <Section id="clients">
                <AnimatedHeading text="Previous clients" />
                  <ClientsContainer>
                    <Row>
                      <Col md={{ span: 10, offset: 1 }}>
                      <ClientsRow>
                        {this.clients()}
                      </ClientsRow>
                      </Col>
                    </Row>
                  </ClientsContainer>
            </Section>
        )
    }

    clients() {



      const BackgroundColor = keyframes`
          0%  {background-color: #04e5e5;}
          10% {background-color: #f37055;}
          20% {background-color: #ef4e7b;}
          30% {background-color: #a166ab;}
          40% {background-color: #5073b8;}
          50% {background-color: #04e5e5;}
          60% {background-color: #07b39b;}
          70% {background-color: #6fba82;}
          80% {background-color: #5073b8;}
          90% {background-color: #1098ad;}
          100% {background-color: #f37055;}
      `
      const ClientCol = styled(Col)`
          text-align: center;
          padding: 20px 0;
          transition: .1s;
          &:hover {
            transform: scale(1.1);
            animation: ${BackgroundColor} 10s infinite alternate;
            z-index: 5;
            border-radius: 10px;
          }
          @media (max-width: 500px) {
            border: none !important;
          }
      `

      const Client = styled.img`
          height: 100px;
      `

      return this.props.clients.map((value, index) => {
          return (
              <ClientCol md={2} key={index}>
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
      render={({ clients }) => <ClientsThree clients={clients.edges} {...props} />}
    />
  )
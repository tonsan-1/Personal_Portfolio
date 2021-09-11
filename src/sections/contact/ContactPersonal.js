import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { graphql, StaticQuery } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import AnimationContainer from 'components/animation-container'

class ContactPersonal extends React.Component {


    render() {

        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #000;
            padding: 5px 0 100px;
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

        const IconRow = styled(Row)`
            margin-top: 150px;
        `

        const IconCol = styled(Col)`
            @media (max-width: 500px) {
              margin-bottom: 140px;
            }
        `

        const IconContainer = styled.div`
            width: 150px;
            height: 150px;
            margin: auto;
            padding: 35px;
            text-align: center;
            position: relative;
            bottom: 75px;
            background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 5s ease-in-out infinite;
            border-radius: 150px;
            transition: .5s;
        `
        
        const InfoPart = styled.div`
            min-height: 250px;
            background-color: #111;
            border: 2px solid #444;
        `
        const Icon = styled.img`
            height: 70px;
            width: 70px;
            object-fit: contain;
        `

        const InfoTitle = styled.h4`
            font-size: 35px;
            color: #fff;
            font-family: Teko;
            text-align: center;
        `

        const Info = styled.div`
            position: relative;
            bottom: 30px;
        `

        const InfoLinkContainer = styled.div`
            text-align: center;
        `

        const InfoLink = styled.a`
            color: #04e5e5;
            transition: .5s;
            &:hover {
              color: #fff;
              text-decoration: none;
            }
        `
        

        return(
            <Section id="contact">
                <Container>
                  <IconRow>
                      <IconCol md={4}>
                        <AnimationContainer animation="fadeIn" delay={500}>
                          <InfoPart>
                            <IconContainer>
                                <Icon src={this.props.emailIcon.childImageSharp.fluid.src} alt="email" />
                            </IconContainer>
                            <Info>
                              <InfoTitle>
                                Email
                              </InfoTitle>
                              <InfoLinkContainer>
                                <InfoLink href="mailto:tonsan221@gmail.com">
                                  tonsan221@gmail.com
                                </InfoLink>
                              </InfoLinkContainer>
                            </Info>
                          </InfoPart>
                        </AnimationContainer>
                      </IconCol>
                      <IconCol md={4}>
                        <AnimationContainer animation="fadeIn" delay={1000}>
                          <InfoPart>
                            <IconContainer>
                              <Icon src={this.props.phoneIcon.childImageSharp.fluid.src} alt="phone"/>
                            </IconContainer>
                            <Info>
                              <InfoTitle>
                                LinkedIn
                              </InfoTitle>
                              <InfoLinkContainer>
                                <InfoLink href="https://www.linkedin.com/in/tonsan1/">
                                  Check my Profile
                                </InfoLink>
                              </InfoLinkContainer>
                            </Info>
                          </InfoPart>
                        </AnimationContainer>
                      </IconCol>
                      <IconCol md={4}>
                        <AnimationContainer animation="fadeIn" delay={1500}>
                          <InfoPart>
                            <IconContainer>
                              <Icon src={this.props.mapIcon.childImageSharp.fluid.src} alt="map" />
                            </IconContainer>
                            <Info>
                              <InfoTitle>
                                GitHub
                              </InfoTitle>
                              <InfoLinkContainer>
                                <InfoLink target="_blank" href="https://github.com/tonsan-1">
                                  Check my Profile
                                </InfoLink>
                              </InfoLinkContainer>
                            </Info>
                          </InfoPart>
                        </AnimationContainer>
                      </IconCol>
                  </IconRow>
                </Container>
            </Section>
        )
    }

}

export default props => (
  <StaticQuery
    query={graphql`
    query {
      emailIcon: file(relativePath: {eq: "icons/email2.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      mapIcon: file(relativePath: {eq: "icons/map.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      phoneIcon: file(relativePath: {eq: "icons/phone.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
    }
    `}
    render={({ 
      emailIcon, 
      mapIcon, 
      phoneIcon}) => <ContactPersonal  
      emailIcon={emailIcon} 
      mapIcon={mapIcon} 
      phoneIcon={phoneIcon}
      {...props} />}
  />
)
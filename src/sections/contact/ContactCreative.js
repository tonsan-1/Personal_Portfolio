import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'
import ContactCreativeForm from './parts/ContactCreativeForm.js'

class ContactCreative extends React.Component {


    render() {

        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #000;
            padding: 100px 0;
        `

        const FormRow = styled(Row)`
           background-color: #111;
        `

        const ContactCol = styled(Col)`
            min-height: 600px;
            max-height: 600px;
            padding: 0;
            display: flex;
            align-items: center;
        `

        const Map = styled.iframe`
            border: none;
            height: 100%;
            width: 100%;
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
            background-color: #04e5e5;
            border-radius: 150px;
            transition: .5s;
        `
        
        const InfoPart = styled.div`
            min-height: 250px;
            background-color: #111;
            border: 2px solid #444;
            &:hover ${IconContainer} {
              background-color: #009e9e;
            }
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
                  <AnimationContainer animation="fadeIn">
                    <FormRow>
                      <ContactCol md={6}>
                          <ContactCreativeForm />
                      </ContactCol>
                      <ContactCol md={6}>
                        <Map  
                          title="map"
                          src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"/>
                      </ContactCol>
                    </FormRow>
                  </AnimationContainer>
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
                                <InfoLink href="mailto:email@yoursite.com">
                                  email@yoursite.com
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
                              <Icon src={this.props.phoneIcon.childImageSharp.fluid.src} alt="phone" />
                            </IconContainer>
                            <Info>
                              <InfoTitle>
                                Phone
                              </InfoTitle>
                              <InfoLinkContainer>
                                <InfoLink href="tel:+(123)123-1234">
                                  (123) 456-7890
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
                                Address
                              </InfoTitle>
                              <InfoLinkContainer>
                                <InfoLink target="_blank" href="https://maps.google.com/maps?ll=53.343244,-6.259338&z=14&t=m&hl=en&gl=US&mapclient=embed&q=1%20Grafton%20Street%20Dublin%20Ireland">
                                  1 Grafton Street Dublin Ireland
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
      phoneIcon}) => <ContactCreative  
      emailIcon={emailIcon} 
      mapIcon={mapIcon} 
      phoneIcon={phoneIcon}
      {...props} />}
  />
)
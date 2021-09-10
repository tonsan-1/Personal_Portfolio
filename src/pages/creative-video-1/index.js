import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from 'components/layout'
import HeroVideo from 'sections/hero/HeroVideo.js'
import AboutOne from 'sections/about/AboutOne.js'
import ServicesOne from 'sections/services/ServicesOne.js'
import PortfolioOne from 'sections/portfolio/PortfolioOne.js'
import TestimonialsOne from 'sections/testimonials/TestimonialsOne.js'
import TeamOne from 'sections/team/TeamOne.js'
import ClientsOne from 'sections/clients/ClientsOne.js'
import ContactCreative from 'sections/contact/ContactCreative.js'

class Index extends React.Component {

  render() {
    
    const { site } = this.props.data
    
    return (
      <div>
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <Layout
          isHome={true}
          sections={['home', 'about', 'services', 'portfolio', 'testimonials', 'team', 'clients', 'contact']}
        >
          <HeroVideo />
          <AboutOne />
          <ServicesOne />
          <PortfolioOne />
          <TestimonialsOne />
          <TeamOne />
          <ClientsOne />
          <ContactCreative />
        </Layout>
      </div>
    )
  }
}

export default Index

export const creativeVideoOneQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`
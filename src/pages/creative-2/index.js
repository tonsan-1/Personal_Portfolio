import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from 'components/layout'
import Hero from 'sections/hero/Hero.js'
import AboutTwo from 'sections/about/AboutTwo.js'
import ServicesTwo from 'sections/services/ServicesTwo.js'
import PortfolioTwo from 'sections/portfolio/PortfolioTwo.js'
import TestimonialsTwo from 'sections/testimonials/TestimonialsTwo.js'
import TeamTwo from 'sections/team/TeamTwo.js'
import ClientsTwo from 'sections/clients/ClientsTwo.js'
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
          <Hero />
          <AboutTwo />
          <ServicesTwo />
          <PortfolioTwo />
          <TestimonialsTwo />
          <TeamTwo />
          <ClientsTwo />
          <ContactCreative />
        </Layout>
      </div>
    )
  }
}

export default Index

export const creativeTwoQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`
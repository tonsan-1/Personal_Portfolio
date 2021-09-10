import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from 'components/layout'
import HeroPersonal from 'sections/hero/HeroPersonal.js'
import AboutPersonal from 'sections/about/AboutPersonal.js'
import ServicesThree from 'sections/services/ServicesThree.js'
import PortfolioThree from 'sections/portfolio/PortfolioThree.js'
import TestimonialsThree from 'sections/testimonials/TestimonialsThree.js'
import ClientsThree from 'sections/clients/ClientsThree.js'
import ContactPersonal from 'sections/contact/ContactPersonal.js'

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
          sections={['home', 'about', 'services', 'portfolio', 'testimonials', 'clients', 'contact']}
        >
          <HeroPersonal />
          <AboutPersonal />
          <ServicesThree />
          <PortfolioThree />
          <TestimonialsThree />
          <ClientsThree />
          <ContactPersonal />
        </Layout>
      </div>
    )
  }
}

export default Index

export const personalQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`
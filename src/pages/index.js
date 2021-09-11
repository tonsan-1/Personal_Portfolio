import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from 'components/layout'
import HeroPersonal from 'sections/hero/HeroPersonal.js'
import AboutPersonal from 'sections/about/AboutPersonal.js'
import ContactPersonal from 'sections/contact/ContactPersonal.js'
import PortfolioOne from '../sections/portfolio/PortfolioOne.js'
import PortfolioThree from '../sections/portfolio/PortfolioThree.js'


class Index extends React.Component {

  render() {
    
    const { site } = this.props.data

    return (
      <div>
        <Helmet>
          <title>Tonsan1 - Personal Portfolio</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <Layout
          isHome={true}
          sections={['home', 'about', 'portfolio', 'certificates', 'contact']}
        >
          <HeroPersonal />
          <AboutPersonal />
          <PortfolioOne />
          <PortfolioThree />
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
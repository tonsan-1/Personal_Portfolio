import React from 'react'
import PageRevealer from 'components/page-revealer'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'scss/abstract.scss'

class Layout extends React.Component {

  componentDidUpdate() {
    window.location.reload(false);
  }


  render() {

    const { children } = this.props
    
    

    return (
      <div id="main">
        <Navbar scroll={this.props.isHome ? true : false} sections={this.props.sections} />
        <PageRevealer />
        <div>
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

export default ({ children, data }) => {
  const { title, description, keywords } = data.site.siteMetadata

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      />
      <Header title={title} />
      <div
        style={{
          padding: '0px 1.0875rem 1.45rem',
        }}
      >
        {children()}
      </div>
    </div>
  )
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`

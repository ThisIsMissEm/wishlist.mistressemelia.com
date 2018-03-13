import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
      padding: '1.45rem 1.0875rem',
    }}
  >
    <h1
      style={{
        margin: 0,
        color: 'white',
        textDecoration: 'none',
      }}
    >
      {title}
    </h1>
  </div>
)

Header.PropTypes = {
  title: PropTypes.string.isRequired,
}

export default Header

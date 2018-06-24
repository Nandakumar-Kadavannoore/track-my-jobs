import React from 'react'
import PropTypes from 'prop-types'

import './components.css'

const CardHeader = props => (
  <div>
    <header className="card-header">
      <div className="card-title">{props.title}</div>
      <div className="card-count">{props.cards.length}</div>
    </header>
  </div>
)

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CardHeader

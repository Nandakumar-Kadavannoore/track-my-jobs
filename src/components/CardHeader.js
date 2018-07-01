import React from 'react'
import PropTypes from 'prop-types'
import './components.css'

const CardHeader = props => (
  <div>
    <div className="lane-header">
      <div className="lane-title">{props.title}</div>
      <div className="lane-count">{props.cards.length}</div>
    </div>
  </div>
)

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CardHeader

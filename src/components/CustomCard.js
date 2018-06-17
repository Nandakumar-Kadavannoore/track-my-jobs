import React from 'react'
import PropTypes from 'prop-types'

import './components.css'

const CustomCard = props => (
  <div className="card">
    <div className="card-item">
      <i className="fas fa-building" />
      <span>{props.companyName} </span>
    </div>
    <div className="card-item">
      <i className="fas fa-map-marker" />
      <span>{props.location} </span>
    </div>
    <div className="card-item">
      <i className="fas fa-dollar-sign" />
      <span>{props.salary} </span>
    </div>
    <div className="card-item">
      <i className="fas fa-sticky-note" />
      <span>{props.notes} </span>
    </div>
  </div>
)
CustomCard.propTypes = {
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  salary: PropTypes.string,
  notes: PropTypes.string,
}

CustomCard.defaultProps = {
  salary: null,
  preference: 'high',
  notes: null,
}

export default CustomCard

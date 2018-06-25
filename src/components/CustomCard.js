import React from 'react'
import PropTypes from 'prop-types'
import Building from '../shared/images/building.svg'
import Dollar from '../shared/images/dollar.svg'
import LocationMarker from '../shared/images/location.svg'
import Notes from '../shared/images/notes.svg'
import './components.css'

const CustomCard = props => (
  <div className="card">
    <div className="card-item">
      <img src={Building} className="icon" alt="logo" />
      <span>{props.companyName} </span>
    </div>
    <div className="card-item">
      <img src={LocationMarker} className="icon" alt="logo" />
      <span>{props.location} </span>
    </div>
    <div className="card-item">
      <img src={Dollar} className="icon" alt="logo" />
      <span>{props.salary} </span>
    </div>
    <div className="card-item">
      <img src={Notes} className="icon" alt="logo" />
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

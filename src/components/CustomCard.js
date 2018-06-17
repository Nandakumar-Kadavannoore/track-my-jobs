import React from 'react'
import PropTypes from 'prop-types'

const CustomCard = props => (
  <div className="card">
    <div className="">{props.companyName}</div>
    <div className="">{props.location}</div>
    <div className="">{props.salary}</div>
    <div className="">{props.preference}</div>
    <div className="">{props.notes}</div>
  </div>
)
CustomCard.propTypes = {
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  salary: PropTypes.string,
  preference: PropTypes.string,
  notes: PropTypes.string,
}

CustomCard.defaultProps = {
  salary: null,
  preference: 'high',
  notes: null,
}

export default CustomCard

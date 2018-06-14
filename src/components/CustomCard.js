import React from 'react'
import PropTypes from 'prop-types'

const CustomCard = props => (
  <div className="card">
    <div className="">{props.title}</div>
    <div className="">{props.description}</div>
    <div className="">{props.label}</div>
  </div>
)
CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default CustomCard

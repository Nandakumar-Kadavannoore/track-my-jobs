import React from 'react'
import PropTypes from 'prop-types'

const NewCard = props => (
  <div className="card">
    <div className="">
      <input type="text" name="title" />
      <input type="text" name="name" />
      <button>Add</button>
    </div>
  </div>
)
NewCard.propTypes = {}

export default NewCard

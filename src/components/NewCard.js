import React from 'react'
import PropTypes from 'prop-types'

const NewCard = props => (
  <div className="card">
    <div className="">
      <div>
        <input type="text" name="title" />
      </div>
      <div>
        <input type="text" name="name" />
      </div>
      <button onClick={props.updateState}>Add</button>
    </div>
  </div>
)
NewCard.propTypes = {}

export default NewCard

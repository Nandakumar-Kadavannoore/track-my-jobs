import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NewCard extends Component {
  state = {
    title: null,
    name: null,
    label: null,
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    return (
      <div className="card">
        <div className="">
          <div>
            <input type="text" name="title" onChange={e => this.handleChange(e)} />
          </div>
          <div>
            <input type="text" name="name" onChange={e => this.handleChange(e)} />
          </div>
          <div>
            <input type="text" name="label" onChange={e => this.handleChange(e)} />
          </div>
          <button onClick={() => this.props.updateState(this.state)}>Add</button>
        </div>
      </div>
    )
  }
}
NewCard.propTypes = {
  updateState: PropTypes.func.isRequired,
}

export default NewCard

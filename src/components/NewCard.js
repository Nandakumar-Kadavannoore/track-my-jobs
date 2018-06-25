import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './components.css'

class NewCard extends Component {
  state = {
    title: null,
    description: null,
    label: null,
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleAdd = () => {
    this.props.onAdd(this.state)
  }
  handleCancel = () => {
    this.props.onCancel()
  }
  render() {
    return (
      <div className="new-card">
        <div>
          <input
            type="text"
            placeholder="Name of the company"
            name="companyName"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            name="location"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Salary"
            name="salary"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <input
            type="textarea"
            placeholder="Notes to self"
            name="notes"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <button className="submit" onClick={this.handleAdd}>
          Add
        </button>
        <button className="cancel" onClick={this.handleCancel}>
          X
        </button>
      </div>
    )
  }
}
NewCard.propTypes = {
  onAdd: PropTypes.func.isRequired,
}

export default NewCard

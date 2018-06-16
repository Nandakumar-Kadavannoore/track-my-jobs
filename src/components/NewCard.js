import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
  render() {
    return (
      <div className="card">
        <div className="">
          <div>
            <input type="text" name="title" onChange={e => this.handleChange(e)} />
          </div>
          <div>
            <input type="text" name="description" onChange={e => this.handleChange(e)} />
          </div>
          <div>
            <input type="text" name="label" onChange={e => this.handleChange(e)} />
          </div>
          <button onClick={this.handleAdd}>Add</button>
        </div>
      </div>
    )
  }
}
NewCard.propTypes = {
  onAdd: PropTypes.func,
}

export default NewCard

import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'

class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Hello world</div>
      </React.Fragment>
    )
  }
}

export default App

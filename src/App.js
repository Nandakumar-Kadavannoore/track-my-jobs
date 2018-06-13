import React, { Component } from 'react'
import Board from 'react-trello'

import Header from './components/Header'
import './App.css'

const CustomCard = props => (
  <React.Fragment>
    <div className="card">{props.title}</div>
  </React.Fragment>
)

class App extends Component {
  state = {}
  render() {
    const data = {
      lanes: [
        {
          id: 'lane1',
          title: 'Applied/Awaiting response',
          label: '2/2',
          cards: [
            { id: 'Card1', title: 'Google', description: 'Software Engineer', label: '30 mins' },
            { id: 'Card2', title: 'Facebook', description: 'Software engineer', label: '5 mins' },
          ],
        },
        { id: 'lane2', title: 'Received First response', label: '0/0', cards: [] },
        { id: 'lane3', title: 'Interview scheduled', label: '0/0', cards: [] },
        { id: 'lane4', title: 'Second Round of interview', label: '0/0', cards: [] },
        { id: 'lane5', title: 'Recieved offer', label: '0/0', cards: [] },
        { id: 'lane5', title: 'Rejected / Declined', label: '0/0', cards: [] },
      ],
    }
    return (
      <React.Fragment>
        <Header />
        <Board
          data={data}
          draggable
          laneDraggable={false}
          style={{ background: 'white' }}
          editable
          customCardLayout
        >
          <CustomCard />
        </Board>
      </React.Fragment>
    )
  }
}

export default App

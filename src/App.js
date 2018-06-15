import React, { Component } from 'react'
import Board from 'react-trello'

import Header from './components/Header'
import CustomCard from './components/CustomCard'
import NewCard from './components/NewCard'
import './App.css'

class App extends Component {
  state = {}
  render() {
    const laneStyle = { background: 'white', border: '1px solid #dfe7ef' }
    // temporary
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
          style: laneStyle,
        },
        {
          id: 'lane2',
          title: 'Received First response',
          label: '0/0',
          cards: [],
          style: laneStyle,
        },
        { id: 'lane3', title: 'Interview scheduled', label: '0/0', cards: [], style: laneStyle },
        {
          id: 'lane4',
          title: 'Second Round of interview',
          label: '0/0',
          cards: [],
          style: laneStyle,
        },
        { id: 'lane5', title: 'Recieved offer', label: '0/0', cards: [], style: laneStyle },
        { id: 'lane5', title: 'Rejected / Declined', label: '0/0', cards: [], style: laneStyle },
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
          newCardTemplate={<NewCard />}
        >
          <CustomCard />
        </Board>
      </React.Fragment>
    )
  }
}

export default App

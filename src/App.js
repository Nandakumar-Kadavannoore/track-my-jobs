import React, { Component } from 'react'
import Board from 'react-trello'

import Header from './components/Header'
import CustomCard from './components/CustomCard'
import NewCard from './components/NewCard'
import './App.css'

class App extends Component {
  state = {
    data: {
      lanes: [
        {
          id: 'lane1',
          title: 'Applied/Awaiting response',
          label: '2/2',
          cards: [
            { id: '123', title: 'Google', description: 'Software Engineer', label: '30 mins' },
            { id: '234', title: 'Facebook', description: 'Software engineer', label: '5 mins' },
          ],
          style: { background: 'white', border: '1px solid #dfe7ef' },
        },
        {
          id: 'lane2',
          title: 'Received First response',
          label: '0/0',
          cards: [],
          style: { background: 'white', border: '1px solid #dfe7ef' },
        },
        {
          id: 'lane3',
          title: 'Interview scheduled',
          label: '0/0',
          cards: [],
          style: { background: 'white', border: '1px solid #dfe7ef' },
        },
        {
          id: 'lane4',
          title: 'Second Round of interview',
          label: '0/0',
          cards: [],
          style: { background: 'white', border: '1px solid #dfe7ef' },
        },
        {
          id: 'lane5',
          title: 'Recieved offer',
          label: '0/0',
          cards: [],
          style: { background: 'white', border: '1px solid #dfe7ef' },
        },
        {
          id: 'lane6',
          title: 'Rejected / Declined',
          label: '0/0',
          cards: [],
          style: { background: 'white', border: '1px solid #dfe7ef' },
        },
      ],
    },
  }

  // handleCardAdd = (card, laneId) => {
  //   console.log(card)
  // }

  shouldReceiveNewData = nextData => {
    console.log(nextData)
    localStorage.setItem('boardData', JSON.stringify(nextData))
  }

  render() {
    // const laneStyle = { background: 'white', border: '1px solid #dfe7ef' }
    return (
      <React.Fragment>
        <Header />
        <Board
          data={JSON.parse(localStorage.getItem('boardData') || this.state.data)}
          onDataChange={this.shouldReceiveNewData}
          draggable
          laneDraggable={false}
          style={{ background: 'white' }}
          editable
          customCardLayout
          newCardTemplate={
            <NewCard
              updateState={
                this.updateState // onCardAdd={this.handleCardAdd}
              }
            />
          }
        >
          <CustomCard />
        </Board>
      </React.Fragment>
    )
  }
}

export default App

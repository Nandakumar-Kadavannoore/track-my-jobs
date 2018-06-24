import React, { Component } from 'react'
import Board from 'react-trello'

import Header from './components/Header'
import CustomCard from './components/CustomCard'
import NewCard from './components/NewCard'
import CardHeader from './components/CardHeader'
import './App.css'

const AddButton = () => <button className="add-new-button">Add new job</button>

class App extends Component {
  state = {
    data: {
      lanes: [
        {
          id: 'lane1',
          title: 'Applied/Awaiting response',
          label: '-',
          cards: [
            {
              id: '123',
              companyName: 'Google',
              location: 'Software Engineer',
              salary: '30 mins',
              preference: '30 mins',
              notes: 'Hello',
            },
          ],
          style: { background: 'white', border: '1px solid rgba(115,165,255, 0.2)' },
        },
        {
          id: 'lane2',
          title: 'Received First response',
          label: '-',
          cards: [],
          style: { background: 'white', border: '1px solid rgba(115,165,255, 0.2)' },
        },
        {
          id: 'lane3',
          title: 'Interview scheduled',
          label: '-',
          cards: [],
          style: { background: 'white', border: '1px solid rgba(115,165,255, 0.2)' },
        },
        {
          id: 'lane4',
          title: 'Second Round of interview',
          label: '-',
          cards: [],
          style: { background: 'white', border: '1px solid rgba(115,165,255, 0.2)' },
        },
        {
          id: 'lane5',
          title: 'Recieved offer',
          label: '-',
          cards: [],
          style: { background: 'white', border: '1px solid rgba(115,165,255, 0.2)' },
        },
        {
          id: 'lane6',
          title: 'Rejected / Declined',
          label: '-',
          cards: [],
          style: { background: 'white', border: '1px solid rgba(115,165,255, 0.2)' },
        },
      ],
    },
  }

  handleCardClick = (cardId, metadata) => {
    console.log(cardId, metadata)
  }

  shouldReceiveNewData = nextData => {
    localStorage.setItem('boardData', JSON.stringify(nextData))
  }

  render() {
    // const laneStyle = { background: 'white', border: '1px solid #dfe7ef' }
    return (
      <React.Fragment>
        <Header />
        <Board
          data={JSON.parse(localStorage.getItem('boardData')) || this.state.data}
          onDataChange={this.shouldReceiveNewData}
          draggable
          laneDraggable={false}
          style={{ background: 'white' }}
          editable
          customCardLayout
          addCardLink={<AddButton />}
          onCardClick={(cardId, metadata) => this.handleCardClick(cardId, metadata)}
          newCardTemplate={<NewCard />}
          customLaneHeader={<CardHeader />}
          className="board-container"
        >
          <CustomCard />
        </Board>
      </React.Fragment>
    )
  }
}

export default App

import React, { Component } from 'react'
import Board from 'react-trello'
import Header from './components/Header'
import JobBoard from './components/JobBoard'
import Resources from './components/Resources'
import CustomCard from './components/CustomCard'
import NewCard from './components/NewCard'
import CardHeader from './components/CardHeader'
import Footer from './components/Footer'
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
              companyName: 'Alphabet Inc',
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
    jobs: [
      {
        name: 'job1',
        description: 'job description',
        url: 'https://google.com',
      },
      {
        name: 'job2',
        description: 'job description',
        url: 'https://google.com',
      },
      {
        name: 'job2',
        description: 'job description',
        url: 'https://google.com',
      },
      {
        name: 'job2',
        description: 'job description',
        url: 'https://google.com',
      },
      {
        name: 'job2',
        description: 'job description',
        url: 'https://google.com',
      },
    ],
    resources: {
      before_job: [
        {
          name: 'resource1',
          url: 'https://google.com',
        },
        {
          name: 'resource2',
          url: 'https://google.com',
        },
      ],
      during_job: [
        {
          name: 'resource1',
          url: 'https://google.com',
        },
        {
          name: 'resource2',
          url: 'https://google.com',
        },
      ],
      after_offer: [
        {
          name: 'resource1',
          url: 'https://google.com',
        },
        {
          name: 'resource2',
          url: 'https://google.com',
        },
      ],
      general: [
        {
          name: 'resource1',
          url: 'https://google.com',
        },
        {
          name: 'resource2',
          url: 'https://google.com',
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

        <JobBoard jobs={this.state.jobs} />
        <Resources resources={this.state.resources} />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App

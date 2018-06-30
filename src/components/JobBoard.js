import React from 'react'

import './components.css'

const JobBoard = ({ jobs }) => (
  <div className="job-board">
    Job Board
    {jobs.map(job => (
      <div>
        <span> {job.name} </span>
        <span> {job.description} </span>
      </div>
    ))}
  </div>
)

export default JobBoard

import React from 'react'

import './components.css'

const JobBoard = ({ jobs }) => (
  <div className="container">
    <h2> Jobs </h2>
    <div className="job-board row">
      {jobs.map(job => (
        <div className="col-sm-3">
          <div className="job-card">
            <div className="job-title"> {job.name} </div>
            <div> {job.description} </div>
            <div>
              <a href={job.url}> View job </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default JobBoard

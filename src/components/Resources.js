import React from 'react'

import './components.css'

const Resources = ({ resources }) => (
  <div className="container-fluid mt-4 job-board row">
    <h2 className="col-sm-12"> Resources </h2>
    <div className="col-sm-3">
      <div className="job-card">
        <div> Before job search </div>
        {resources.before_job.map(resource => (
          <div>
            <a href={resource.url}> {resource.name}</a>
          </div>
        ))}
      </div>
    </div>
    <div className="col-sm-3">
      <div className="job-card">
        <div> During job search </div>
        {resources.during_job.map(resource => (
          <div>
            <a href={resource.url}> {resource.name}</a>
          </div>
        ))}
      </div>
    </div>
    <div className="col-sm-3">
      <div className="job-card">
        <div> After you have an offer </div>
        {resources.after_offer.map(resource => (
          <div>
            <a href={resource.url}> {resource.name}</a>
          </div>
        ))}
      </div>
    </div>
    <div className="col-sm-3">
      <div className="job-card">
        <div> General </div>
        {resources.general.map(resource => (
          <div>
            <a href={resource.url}> {resource.name}</a>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Resources

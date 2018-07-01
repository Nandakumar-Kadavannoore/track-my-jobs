import React from 'react'

import './components.css'

const Resources = ({ resources }) => (
  <div className="container-fluid mt-4">
    <div className="resource-board">
      <h2> Useful Resources </h2>
      {resources.map(resource => (
        <div>
          <a href={resource.url}> {resource.name}</a>
        </div>
      ))}
    </div>
  </div>
)

export default Resources

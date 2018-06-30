import React from 'react'

import './components.css'

const Resources = ({ resources }) => (
  <div className="resource-board">
    Useful Resources
    {resources.map(resource => (
      <div>
        <a href={resource.url}> {resource.name}</a>
      </div>
    ))}
  </div>
)

export default Resources

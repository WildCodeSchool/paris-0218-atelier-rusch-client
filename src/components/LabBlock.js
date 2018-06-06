import React from 'react'

const LabBlock = ({ article }) => {
  return (
    <div>
      <p> {article.section} </p>
      <h1 className="App-intro">
        {article.title}
      </h1>
      <h2 className="App-intro">
        {article.shortDescription}
      </h2>
      <p className="App-intro">
        {article.createdAt}
      </p>
    </div>
  )
}

export default LabBlock

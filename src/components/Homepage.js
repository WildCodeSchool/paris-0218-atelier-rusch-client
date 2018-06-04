import React, { Component } from 'react'

class Homepage extends Component {
  constructor () {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    fetch(`http://localhost:3003/homepage`)
      .then(result => result.json())
      .then(data => {
        console.log(data)
        this.setState({ data: data[0] })
      })
      .catch(console.error)
  }

  render () {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
      this is the data :{this.state.data.title}
        </p>
        <p className="App-intro">
      {this.state.data.description}
        </p>
      </div>
    )
  }
}

export default Homepage

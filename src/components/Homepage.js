import React, { Component } from 'react'

class Homepage extends Component {
  constructor () {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    console.log('yolo')

    fetch('http://localhost:3003/homepage')
      .then(result => result.json())
      .then(data => {
        this.setState({ data: data })
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
      this is the data :{this.state.data}
        </p>
      </div>
    )
  }
}

export default Homepage

import React, { Component } from 'react'
import AdminNav from './AdminNav.js'
import './css/ArticleForm.css'

class AdminMemberForm extends Component {

  state = {
    name: this.props.equipe.name || '',
    image: this.props.equipe.image || '',
    position: this.props.equipe.position || '',
    description: this.props.equipe.description|| '',
    linkedIn: this.props.equipe.linkedIn || '',
    portfolio: this.props.equipe.portfolio || ''
  }

  handleChange = event => {
    const key = event.target.name
    this.setState({ ...this.state.filtre, [key]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const member = {
      name: this.state.equipe.name || '',
      image: this.state.equipe.image || '',
      position: this.state.equipe.position || '',
      description: this.state.equipe.description|| '',
      linkedIn: this.state.equipe.linkedIn || '',
      portfolio: this.state.equipe.portfolio || ''
    }

    this.props.submitMember(member)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Nom :<br/>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>Photo :<br/>
          <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
        </label>
        <label>Poste :<br/>
          <input type="text" name="position" value={this.state.position} onChange={this.handleChange} />
        </label>
        <textarea>Description :<br/>
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        </textarea>
        <textarea>Parcours :<br/>
          <input type="text" name="carreer" value={this.state.carreer} onChange={this.handleChange} />
        </textarea>
        <label>LinkedIn :<br/>
          <input type="text" name="linkedIn" value={this.state.linkedIn} onChange={this.handleChange} />
        </label>
        <label>Portfolio :<br/>
          <input type="text" name="portfolio" value={this.state.portfolio} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  )}
}

export default AdminMemberForm

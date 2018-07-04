import React, { Component } from 'react'
import './css/ArticleForm.css'

class AdminMemberForm extends Component {

  state = {
    name: this.props.member.name || '',
    image: this.props.member.image || '',
    position: this.props.member.position || '',
    description: this.props.member.description|| '',
    carreer: this.props.member.carreer || '',
    linkedIn: this.props.member.linkedIn || '',
    portfolio: this.props.member.portfolio || ''
  }

  handleChange = event => {
    const key = event.target.name
    this.setState({ ...this.state.filtre, [key]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.submitMember(this.state)
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
        <label>Description :<br/>
          <textarea type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
        <label>Parcours :<br/>
          <textarea type="text" name="carreer" value={this.state.carreer} onChange={this.handleChange} />
        </label>
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

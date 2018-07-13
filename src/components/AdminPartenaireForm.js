import React, { Component } from 'react'
import './css/ArticleForm.css'

class AdminPartenaireForm extends Component {

  state = {
    name: this.props.partenaire.name || '',
    image: this.props.partenaire.image || '',
    shortDescription: this.props.partenaire.shortDescription || ''
  }

	handleChange = event => {
		const key = event.target.name
    	this.setState({ ...this.state.partenaire, [key]: event.target.value })
    	console.log(this.state)
  }

	handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)

    this.props.submitPartenaire(this.state)
    { window.location.pathname = '/admin/partenaires' }
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
        <label>Nom du partenaire :<br/>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
				<label>Logo du partenaire :<br/>
					<input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
				</label>
				<label>Description du partenaire :<br/>
					<textarea type="text" name="shortDescription" value={this.state.shortDescription} onChange={this.handleChange} />
				</label>

				<input type="submit" value="Submit" />
			</form>
	)}
}

export default AdminPartenaireForm

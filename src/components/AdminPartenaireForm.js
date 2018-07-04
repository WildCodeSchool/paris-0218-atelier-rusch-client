import React, { Component } from 'react'
import AdminNav from './AdminNav.js'
import './css/ArticleForm.css'

class AdminPartenaireForm extends Component {

  state = {
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
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Logo du partenaire :<br/>
					<input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
				</label>
				<label>Description du partenaire :<br/>
					<input type="text" name="shortDescription" value={this.state.shortDescription} onChange={this.handleChange} />
				</label>

				<input type="submit" value="Submit" />
			</form>
	)}
}

export default AdminPartenaireForm

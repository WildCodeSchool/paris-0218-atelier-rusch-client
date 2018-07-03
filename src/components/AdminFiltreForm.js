import React, { Component } from 'react'
import AdminNav from './AdminNav.js'
import './css/ArticleForm.css'

class AdminFiltreForm extends Component {

	state = {
		filterTag: '',
		section: ''
	}

	handleChange(event) {
		const key = event.target.name

    	this.setState({ ...this.state, [key]: event.target.value })
  	}

	handleSubmit(event) {
	    event.preventDefault()

	    const filtre = {
	    	filterTag: this.state.filterTag,
			section: this.state.section
		}

		console.log('submit new filtre', filtre)

		fetch('http://localhost:3456/filters', {
			method: 'post',
			body: JSON.stringify(filtre),
			headers: {
			'Content-Type': 'application/json'
			}
		})
	}

	render() {
		console.log(this.state)

		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<label>Nom du filtre :<br/>
				<input type="text" name="filterTag" value={this.state.filterTag} onChange={this.handleChange.bind(this)} />
				</label>
				
				<select name="section" value="section" onChange={this.handleChange.bind(this)}>
				  <option value="Choose">Choisissez la section</option>
				  <option value="LabRusch">LabRusch</option>
				  <option value="Projets">Projets</option>
				</select>

				<input type="submit" value="Submit" />
			</form>
	)}
}

export default AdminFiltreForm
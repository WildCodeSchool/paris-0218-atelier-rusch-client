import React, { Component } from 'react'
import './css/ArticleForm.css'

class AdminFiltreForm extends Component {

  state = {
    filterTag: this.props.filtre.filterTag || '',
    section: this.props.filtre.section || ''
  }

	handleChange = event => {
		const key = event.target.name
    this.setState({ ...this.state.filtre, [key]: event.target.value })
    console.log(this.state)
  }

	handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)

    this.props.submitFiltre(this.state)
    { window.location.pathname = '/admin/filtres' }
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Nom du filtre :<br/>
				<input type="text" name="filterTag" value={this.state.filterTag} onChange={this.handleChange} />
				</label>

				<select name="section" value={this.state.section} onChange={this.handleChange}>
				  <option value="Choose">Choisissez la section</option>
				  <option value="lab">LabRusch</option>
				  <option value="projets">Projets</option>
				</select>

				<input type="submit" value="Submit" />
			</form>
	)}
}

export default AdminFiltreForm

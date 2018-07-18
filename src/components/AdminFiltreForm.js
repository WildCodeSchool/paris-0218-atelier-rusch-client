import React, { Component } from 'react'
import { navigate } from '@reach/router'
import './css/ArticleForm.css'

class AdminFiltreForm extends Component {

  state = {
    filterTag: this.props.filtre.filterTag || '',
    section: this.props.filtre.section || '',
    errorPost: ''
  }

	handleChange = event => {
		const key = event.target.name
    this.setState({ ...this.state.filtre, [key]: event.target.value, errorPost: '' })
  }

	handleSubmit = event => {
    event.preventDefault()
    if (this.state.filterTag === '') {
      this.setState({ errorPost: '* Il faut renseigner un nom !' })
    } else if (this.state.section === '') {
      this.setState({ errorPost: '* Il faut sélectionner une section !' })
    } else {
      this.props.submitFiltre(this.state)
      navigate('/admin/filtres')
    }
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Nom du filtre :<br/>
				<input type="text" name="filterTag" value={this.state.filterTag} onChange={this.handleChange} />
				</label>

				<select name="section" value={this.state.section} onChange={this.handleChange}>
				  <option value="">Choisissez la section</option>
				  <option value="lab">LabRusch</option>
				  <option value="projets">Projets</option>
				</select>

				<input className='submit' type="submit" value="Publier" />
        <div className='errorPost'>{this.state.errorPost}</div>
			</form>
	)}
}

export default AdminFiltreForm

import React, { Component } from 'react'
import './css/ArticleForm.css'

class AdminPartenaireForm extends Component {

  state = {
    name: this.props.partenaire.name || '',
    image: this.props.partenaire.image || '',
    shortDescription: this.props.partenaire.shortDescription || '',
    errorPost: ''
  }

	handleChange = event => {
		const key = event.target.name
    this.setState({ ...this.state.partenaire, [key]: event.target.value, errorPost: '' })
  }

	handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    if (this.state.name === '') {
      this.setState({ errorPost: '* Il faut sélectionner un nom !' })
    } else if (this.state.image === '') {
      this.setState({ errorPost: '* Il faut mettre une photo !' })
    } else if (this.state.shortDescription === '') {
      this.setState({ errorPost: '* Il faut renseigner une description !' })
    } else {
      this.props.submitPartenaire(this.state)
      window.location.pathname = '/admin/partenaires'
    }
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

				<input className='submit' type="submit" value="Submit" />
        <div className='errorPost'>{this.state.errorPost}</div>
			</form>
	)}
}

export default AdminPartenaireForm

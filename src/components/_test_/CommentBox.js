import React from 'react'

export default class CommentBox extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			value : ""
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		alert(this.state.value)
		event.preventDefault()
	}

	handleChange(event){
		this.setState({
			value: event.target.value
		})
	}

	render(){
		return (
			<form className="p-5" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label>text box controlled by react states</label>
					<input
						type="text"
						className="form-control"
						placeHolder="please input something"
						onChange={this.handleChange}
						value={this.state.value}
					/>
					<div>
						<button className="btn btn-primary" type="submit" >touch me</button>
					</div>
				</div>
			</form>
		)
	}
}

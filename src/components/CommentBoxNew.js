import React from 'react'

export default class CommentBoxNew extends React.Component{
	constructor(props){
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		this.props.onAddComment(this.textInput.value)
		event.preventDefault()
	}

	render(){
		return (
			<form className="p-5" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label>text box not controlled by react states</label>
					<input
						type="text"
						className="form-control"
						placeHolder="please input something"
						ref={(textInput) => {this.textInput = textInput}}
					/>
					<div>
						<button className="btn btn-primary" type="submit" >留言</button>
					</div>
					<p>已有{this.props.commentsLength}条评论</p>
				</div>
			</form>
		)
	}
	
}
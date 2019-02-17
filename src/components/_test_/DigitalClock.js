import React from 'react'
	
class DigitalClock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			date : new Date()
		}
	}

	componentDidMount(){
		this.timer = setInterval(() => {
		// 	this.state = {
		// 	date : new Date()	//this way can't realize on-time change, because it won't active render()
		// }
			this.setState({
				date : new Date()
			})
		},1000)
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}

	render() {
		console.log("invoke render() method")
		return(
			<div className="digital-clock-component jumbotron">
				<h1>{this.state.date.toLocaleTimeString()}</h1>
			</div>
			) 
	}
}

export default DigitalClock
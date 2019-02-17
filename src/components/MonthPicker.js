import React from 'react'
import PropTypes from 'prop-types'
import { padLeft,range } from '../utility'

class MonthPicker extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: true
		}
	}

	toggleDropdown = (event) => {
		event.preventDefault()
		this.setState({
			isOpen: !this.state.isOpen
		}
		)
	}

	render() {
		const { year, month } = this.props
		const {isOpen} = this.state
		const monthRange = range(12,1)
		const yearRange = range(9,-4).map(number => number+year)
		console.log(monthRange)
		return(	
			<div className="dropdown month-picker-component">
				<h4>选择月份</h4>
				<button 
					className="btn btn-lg btn-secondary dropdown-toggle"
					onClick={this.toggleDropdown}
				>
					{`${year}年 ${padLeft(month)}月`}
				</button>
				{ isOpen && 	
					<div className="dropdown-menu" style={{display:'block'}}>
						<div className="row">
						    <div className="col-sm border-right">
						      One of three columns
						    </div>
						    <div className="col-sm">
						      One of three columns
						    </div>
				
						  </div>
					</div>
				}
			</div>
		)
	}
}

export default MonthPicker
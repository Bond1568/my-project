import React from 'react'
import PropTypes from 'prop-types'
import { padLeft,range } from '../utility'

class MonthPicker extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: true,
			selectedYear: this.props.year,
			selectedMonth: this.props.month
		}
	}

	toggleDropdown = (event) => {
		event.preventDefault()
		this.setState({
			isOpen: !this.state.isOpen
		}
		)
	}

	selectYear = (event, yearNumber) => {
		event.preventDefault()
		this.setState({
			selectedYear: yearNumber
		})
	}

	selectMonth = (event, monthNumber) => {
		event.preventDefault()
		this.setState({
			isOpen: false
		}
		)
		console.log(this.state.selectedYear)
		this.props.onChange(this.state.selectedYear, monthNumber)
	}

	render() {
		const { year, month } = this.props
		const {isOpen, selectedYear, selectedMonth} = this.state
		const monthRange = range(12,1)
		const yearRange = range(9,-4).map(number => number+year)
		
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
						      {
						      	yearRange.map((yearNumber, index) =>
						      		<a 
						      			href="#"
						      			key={index}
						      			onClick={(event) => {this.selectYear(event,yearNumber)}}
						      			className= { (yearNumber==selectedYear)? "dropdown-item active" : "dropdown-item"}>
						      			{yearNumber}年
						      		</a>
						      	)
						      }
						    </div>
						    <div className="col-sm">
						      {
						      	monthRange.map((monthNumber,index) => 
						      		<a 
						      			href="#"
						      			key={index}
						      			onClick= {(event) => {this.selectMonth(event, monthNumber)}}
						      			className= { monthNumber==selectedMonth? "dropdown-item active" : "dropdown-item"}>
						      		{padLeft(monthNumber)}月
						      		</a>
						      		)
						      }
						    </div>
				
						  </div>
					</div>
				}
			</div>
		)
	}
}

export default MonthPicker
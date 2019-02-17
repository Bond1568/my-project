import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'

const TotalPrice = ({income, outcome})=> {
	return (
		<div className="container">
		  <div className="row">
		    <div className="col-sm">
		      收入：{income}
		    </div>
		    <div className="col-sm">
		      支出：{outcome}
		    </div>
		  </div>
		</div>
	)
}

TotalPrice.propTypes = {
	income: PropTypes.number.isRequired,
	outcome: PropTypes.number.isRequired,
}
export default TotalPrice
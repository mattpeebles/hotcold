import React from 'react'
import Guess from './Guess'

export default class History extends React.Component{

	render(){


		const guesses = this.props.history.map((guess, index) => {
			return <Guess key={index} guess={guess} />
		})

		return(
			<div className="history">
				<ul>
					{guesses}
				</ul>
			</div>	
		)
	}
}
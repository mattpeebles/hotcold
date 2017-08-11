import React from 'react'

export default class Input extends React.Component{

	constructor(){
		super()
		this.state = {
			guess: ''
		}
	}


	changeGuess(e){
		const guess = parseInt(e.target.value, 10)
		this.setState({guess})
	}

	handleChange(){
		const guess = this.state.guess
		if(guess !== ''){
			this.props.changeGuess(guess)
			this.props.changeHistory(guess)
			this.props.changeStatus(guess)
		}
	}

	render(){
	
		return(
	        <div className="form-group" >
	            <label htmlFor={this.props.id}>Guess a number between 1 and 100</label>
	            <input type="number" id={this.props.id} min={this.props.min} max={this.props.max} onChange={this.changeGuess.bind(this)} />
	            <input type='submit' onClick={this.handleChange.bind(this)}/>
	        </div>
		);
	}
}
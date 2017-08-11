import React from 'react'

import History from './history'
import Input from './input'
import Status from './status'

function random(){
	const min = Math.ceil(1);
	const max = Math.floor(100);
	return Math.floor(Math.random() * (max - min)) + min
}



export default class Board extends React.Component{
	constructor() {
		super();
		this.state = {
			computerNumber: random(),
			guess: '',
			status: '',
			history: [],
			win: 0
		}
	}



	changeGuess(guess){
		this.setState({guess})
	}

	changeHistory(guess){
		
		const history = this.state.history

		if(!history.includes(parseInt(guess))){
			
			history.push(parseInt(guess))

			history.sort((a, b) => {
				return a - b
			})

			this.setState({history})
		}
	}

	changeStatus(guess){
		const targetNum = this.state.computerNumber

		if (guess === targetNum){
			const status = 'Win'
			const win = this.state.win + 1
			this.setState({status})
			this.setState({win})
		}

		else if ((guess >= (targetNum - 20) && !(guess <= targetNum - 20))  && ((guess <= (targetNum + 20)) && (!(guess >= targetNum + 20)))) {
			console.log('i called hot')
			const status = 'Hot'
			this.setState({status})
		}

		else if(guess <= (targetNum - 20) || guess >= (targetNum + 20)){
			console.log('i called cold')
			const status = 'Cold'
			this.setState({status})
		}
	}


	newGame(){
		const computerNumber = random()
		const guess = ''
		const status = ''
		const history = []

		this.setState({computerNumber, guess, status, history})
	}


	render(){

		if(this.state.status == ('Win')){
			return(
				<div>
					<h1>Great Guess! My number was {this.state.computerNumber}</h1>
					<p>It took you {this.state.history.length} guess</p>
					<p>Wins: {this.state.win}</p>
					<button onClick={this.newGame.bind(this)}> Play Again? </button>
				</div>
			)
		}

		return(
			<div className="board">
				<div>Hot or Cold</div>
				<div>
					<Input id="guess" min={0} max={100} changeGuess={this.changeGuess.bind(this)} changeHistory={this.changeHistory.bind(this)} changeStatus={this.changeStatus.bind(this)}/>
					<Status status={this.state.status}/>
					<History history={this.state.history}/>
				</div>
			</div>
		)
	}
}
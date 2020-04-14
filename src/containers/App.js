import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from '../robots';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {	
			// robots: robots,
			robots: [],
			searchfield: ''
		}
	}


	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})

	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ?
			 <h1 className = 'tc'>`This might take a while. If this stayes for more than 3 seconds, check your internet. ROBOFRIENDS loading,  please  chill`</h1> :
			(
				<div className = 'tc'>
					<h1 className = 'f1'> ROBOFRIENDS </h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<CardList robots = {filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}

export default App;
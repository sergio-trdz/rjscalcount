import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Count from './components/Count';
import Food from './components/Food';
import Add from './components/Add';
import uuid from 'uuid';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  state = {
    foods: [
      {
		id: uuid.v4(),
		enteredcal: 50,
		enteredfood: 'carrot',
      },
      {
		id: uuid.v4(),
		enteredcal: 20,
		enteredfood: 'apple',
      }
	]
	

	}
	
	addFood = (enteredfood, enteredcal) => {
    const newFood = {
      id: uuid.v4(),
      enteredcal,
      enteredfood,
    }

    const newfoods = this.state.foods
    newfoods.push(newFood);
    
    this.setState({ 
	  foods: newfoods
    });
	}
	
	
render () {
		return (
			<Router>
			<Container>	
					<Row>
						<Col>
							<Count foods={this.state.foods}/>
						</Col>
						<Col>
							<Add addFood={this.addFood}/>
							<Food foods={this.state.foods}/>
						</Col>
					</Row>
			</Container>
			</Router>
		);
	}
}


export default App;

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
				calories: 50,
        title: 'carrot',
      },
      {
				id: uuid.v4(),
				calories: 20,
        title: 'apple',
      }
    ]
	}
	
	addFood = (title) => {
    const newFood = {
      id: uuid.v4(),
      title,
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
								<Count/>
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

import React from 'react';
import {  Row, Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Food(props) {


    return (
    <Container style={{height: "50vh", width: "100%", paddingTop: 30}}>
        <Row>
            <h4>Food and calories</h4>
        </Row>
        <Row >
            <Table striped bordered hover variant="dark " >
                <thead>
                    <tr>
                        <th></th>
                        <th>Food</th>
                        <th>Calories</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.foods.map(food => {
                        return (<tr>
                                    <Button class="btn btn-dark" >ADD</Button>
                                    <td>{food.enteredfood}</td>
                                    <td>{food.enteredcal}</td>
                                    <td><Button variant="danger">Delete</Button></td>    
                                </tr>)
                    })}
                </tbody>
            </Table>
        </Row>
    </Container>
    )
}


export default Food;


import React, { useState } from 'react';
import { Form, Row, Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Count(props) {
    return (
        <Container style={{height: "100vh", width: "100%", paddingTop: 30}}>
            <Row>
                <h4>Count of calories</h4>
                </Row>
                    <Row>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                <th>Food</th>
                                <th>Calories</th>
                                <th></th>
                                <th>Count</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {props.foods.map(food => {
                        return (<tr>
                                    <td>{food.enteredfood}</td>
                                    <td>{food.enteredcal}</td>  
                                    <td>+</td>
                                <td>1</td>
                                <td>-</td>      
                                </tr>)
                    })}
                            </tbody>
                        </Table>
                    </Row>
                <Row>
                <h4>Total</h4>
                <Form.Control  type="text"  placeholder="50"  />
            </Row>
        </Container>
        
    )
}


export default Count;
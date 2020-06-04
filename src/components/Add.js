import React, {useState} from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Add(props) {

    const [title, setTitle] = useState('')

    const onSubmit = (e) => {
        console.log(title)
        e.preventDefault();
        props.addFood(title);
        setTitle('')
    }

    const onChange = (e) => setTitle(e.target.value);

    return (
        <Container style={{height: "50vh", width: "100%", paddingTop: 30}}>
            <Row>
                <h4>Add food and calories</h4>
            </Row>
            <Row>
                <Col>Add food</Col>
            </Row>
            <Row>
                <Form.Control value={title} onChange={onChange} type="text"  placeholder="Enter food"  />
            </Row>
            <Row>
                <Col >Add calories</Col>
            </Row>
            <Row>
                 <Form.Control value={title} onChange={onChange} type="text"  placeholder="Enter calories"  />
            </Row>
            <Row>
                <Button onClick={onSubmit} variant="dark w-100 mt-3">Add</Button>
            </Row>
     </Container>
    )
}


export default Add;

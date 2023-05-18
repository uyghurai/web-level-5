import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function CharacterCard(props) {
    return (
        <Col>
            <Card className='card h-100' bg='light' border='danger'>
                <Card.Img variant='top' src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
            </Card>
            {/*<h2>{props.name}</h2>
            <img src={props.image} alt={props.name} />
            <p>{props.description}</p> */}
        </Col>
    );
}

export default CharacterCard;

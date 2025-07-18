import React from "react";
import{Card} from "react-bootstrap";

const Player = ({
    name="unknow" ,
    team="unknow" ,
    nationality="unknow" ,
    jerseyNumber=0 ,
    age=0 ,
    image=""  
}) => {
    const cardStyle = {
        width: '18rem',
        margin: '10px'
    };
    
return (
    <Card style={cardStyle}>
        <Card.Img variant="top" src={image} /> 
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p>Team: {team}</p>
                    <p>nationality: {nationality}</p>
                    <p>Jersey Number: {jerseyNumber}</p>
                    <p>Age: {age}</p>
                </Card.Text>
            </Card.Body>   
    </Card>);

};

export default Player;

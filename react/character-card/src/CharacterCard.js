import React from 'react';

function CharacterCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name} />
            <p>{props.description}</p>
        </div>
    );
}

export default CharacterCard;

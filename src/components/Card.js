import React from "react";
import "./Card.css";

function Card(props) {
    const { card, playable, onPlay } = props;

    let playButton;
    if (playable) {
        playButton = <button value={card.id} onClick={onPlay}>Play this card</button>
    }

    return(
        <div className="card-container">
            <p className="card-name">
                <b>{card.name}</b>
            </p>
            <div className="card-type-badge">
                <p>{card.type}</p>
            </div>
            <p>{card.winChance}% win chance against {card.weakAgainst} type cards</p>
            {playButton}
        </div>
    );
}

export default Card;
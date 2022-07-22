import React, { useState } from "react";
import uniqid from "uniqid";
import "./Game.css";

function Game() {
    const [coins, setCoins] = useState(0);
    const [inventory, setInventory] = useState([
        { 
            id: uniqid(),
            name: "Pebble",
            type: "Rock",
            strongAgainst: "Scissors",
            weakAgainst: "Paper",
            winChance: 100 
        },
        { 
            id: uniqid(),
            name: "Looseleaf",
            type: "Paper",
            strongAgainst: "Rock",
            weakAgainst: "Scissors",
            winChance: 100 
        },
        {
            id: uniqid(),
            name: "Blunt Tip",
            type: "Scissors",
            strongAgainst: "Paper",
            weakAgainst: "Rock",
            winChance: 100 
        }
    ]);
    const [gameData, setGameData] = useState({
        round: 0,
        userCardID: ""
    });

    return(
        <div className="game-container">
            <div className="game-container-left">
                <h3>Coins: {coins}</h3>
                <h3>Your Cards</h3>
                <div className="inventory">
                    {inventory.map((card) => (
                        <div key={card.id} className="card-container">
                            <p className="card-name">
                                <b>{card.name}</b>
                            </p>
                            <div className="card-type-badge">
                                <p>{card.type}</p>
                            </div>
                            <p>{card.winChance}% win chance against {card.weakAgainst} type cards</p>
                            <button value={card.id} onClick={(e) => setGameData({
                                ...gameData,
                                userCardID: e.target.value
                            })}>Play this card</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="game-container-right">
                <h1>Play a card.</h1>
                <h3>Round: {gameData.round}</h3>
                <h3>{gameData.userCardID}</h3>
            </div>
        </div>
    );
}

export default Game;
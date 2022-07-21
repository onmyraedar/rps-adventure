import React, { useState } from "react";
import "./Game.css";

function Game() {
    const [coins, setCoins] = useState(0);
    const [inventory, setInventory] = useState([
        { 
            name: "Pebble",
            type: "Rock",
            strongAgainst: "Scissors",
            weakAgainst: "Paper",
            winChance: 100 
        },
        { 
            name: "Looseleaf",
            type: "Paper",
            strongAgainst: "Rock",
            weakAgainst: "Scissors",
            winChance: 100 
        },
        {
            name: "Blunt Tip",
            type: "Scissors",
            strongAgainst: "Paper",
            weakAgainst: "Rock",
            winChance: 100 
        }
    ]);

    return(
        <div className="game-container">
            <h3>Coins: {coins}</h3>
            <h3>Your Cards</h3>
            <div className="inventory">
                {inventory.map((card) => (
                    <div className="card-container">
                        <p className="card-name">
                            <b>{card.name}</b>
                        </p>
                        <div className="card-type-badge">
                            <p>{card.type}</p>
                        </div>
                        <p>{card.winChance}% win chance against {card.weakAgainst} type cards</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Game;
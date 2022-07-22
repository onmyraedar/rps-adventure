import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import Card from "./Card.js";
import generateComputerPlay from "../game/generateComputerPlay.js";
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
        round: 1,
        activeCard: {},
        computerCard: {}
    });
    
    function savePlayedCard(e) {
        const lastPlayedCard = inventory.find(
            (card) => card.id === e.target.value
        );
        const computerChoice = generateComputerPlay();
        setGameData((gameData) => {
            return {
            ...gameData,
            activeCard: lastPlayedCard,
            computerCard: computerChoice
            }
        });  
        console.log(gameData.computerCard.id);
    } 

    return(
        <div className="game-container">
            <div className="game-container-left">
                <h3>Coins: {coins}</h3>
                <h3>Your Cards</h3>
                <div className="inventory">
                    {inventory.map((card) => (
                        <Card key={card.id} card={card} playable={true} onPlay={savePlayedCard}/>
                    ))}
                </div>
            </div>
            <div className="game-container-right">
                <h1>Play a card.</h1>
                <h3>Round: {gameData.round}</h3>
                <h3>You just played this card:</h3>
                <Card key={gameData.activeCard.id} card={gameData.activeCard} playable={false} onPlay={savePlayedCard}/> 
                <h3>The computer played this card:</h3>
                <Card key={gameData.computerCard.id} card={gameData.computerCard} playable={false} onPlay={savePlayedCard}/> 
            </div>
        </div>
    );
}

export default Game;
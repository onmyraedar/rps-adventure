import React, { useState } from "react";
import uniqid from "uniqid";
import Card from "./Card.js";
import calculateRoundCoins from "../game/calculateRoundCoins.js";
import calculateRoundScore from "../game/calculateRoundScore.js";
import declareWinner from "../game/declareWinner.js";
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
        score: 0,
        round: 1,
        stage: "Play",
        playerCard: {},
        computerCard: {},
        winner: ""
    });
    
    function playRound(e) {
        const playerChoice = inventory.find(
            (card) => card.id === e.target.value
        );
        const computerChoice = generateComputerPlay();
        const roundWinner = declareWinner(playerChoice, computerChoice);
        setGameData((gameData) => {
            return {
            ...gameData,
            score: gameData.score + calculateRoundScore(roundWinner),
            stage: "Results",
            playerCard: playerChoice,
            computerCard: computerChoice,
            winner: roundWinner
            }
        });
        setCoins((coins) => coins + calculateRoundCoins(roundWinner));
    } 

    function resetGameData() {
        setGameData((gameData) => {
            return {
            ...gameData,
            round: gameData.round + 1,
            stage: "Play",
            playerCard: {},
            computerCard: {},
            winner: ""
            }
        });        
    }

    let gameboard;
    if (gameData.stage === "Play") {
        gameboard =
        <div>
            <h3>Round: {gameData.round}, {gameData.stage} Stage</h3>
            <h3>Play a card.</h3>
        </div>
    } else if (gameData.stage === "Results") {
        gameboard = 
        <div>
            <h3>Round: {gameData.round}, {gameData.stage} Stage</h3>
            <h3>You just played this card:</h3>
            <Card key={gameData.playerCard.id} card={gameData.playerCard} playable={false} onPlay={playRound}/> 
            <h3>The computer played this card:</h3>
            <Card key={gameData.computerCard.id} card={gameData.computerCard} playable={false} onPlay={playRound}/> 
            <button onClick={resetGameData}>Next</button>
            <p>Winner: {gameData.winner}</p>
        </div>
    } 

    return(
        <div className="game-container">
            <div className="game-container-left">
                <h3>Coins: {coins}</h3>
                <h3>Score: {gameData.score}</h3>
                <h3>Your Cards</h3>
                <div className="inventory">
                    {inventory.map((card) => (
                        <Card key={card.id} card={card} playable={gameData.stage === "Play" ? true : false} onPlay={playRound}/>
                    ))}
                </div>
            </div>
            <div className="game-container-right">
                {gameboard}
            </div>
        </div>
    );
}

export default Game;
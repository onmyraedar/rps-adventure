import React, { useState } from "react";
import uniqid from "uniqid";
import Card from "./Card.js";
import GameboardCard from "./GameboardCard.js";
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
        playerCurrentCard: {},
        playerNextCard: {},
        isOnFront: false,
        computerCard: {},
        winner: ""
    });

    function selectCard(e) {
        const playerChoice = inventory.find(
            (card) => card.id === e.target.value
        );
        setGameData((gameData) => {
            return {
            ...gameData,
            playerCurrentCard: gameData.playerNextCard,
            playerNextCard: playerChoice,
            isOnFront: !gameData.isOnFront
            }
        });                
    }
    
    function playRound(e) {
        const playerChoice = gameData.playerNextCard;
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
            <GameboardCard 
                currentCard={gameData.playerCurrentCard}
                nextCard={gameData.playerNextCard}
                isOnFront={gameData.isOnFront}
            />
            <button className="confirm-btn" onClick={playRound}>Confirm</button>
        </div>      
    } else if (gameData.stage === "Results") {
        gameboard = 
        <div>
            <h3>Round: {gameData.round}, {gameData.stage} Stage</h3>
            <h3>You just played this card:</h3>
            <GameboardCard 
                currentCard={gameData.playerCurrentCard}
                nextCard={gameData.playerNextCard}
                isOnFront={gameData.isOnFront}
            />
            <h3>The computer played this card:</h3>
            <Card key={gameData.computerCard.id} card={gameData.computerCard} playable={false} onPlay={playRound}/> 
            <button onClick={resetGameData}>Next</button>
            <p>Winner: {gameData.winner}</p>
        </div>
    }

    return(
        <div className="game-container">
            <div className="game-container-left">
                <div className="section-header">
                    <h3>Inventory</h3>
                </div>
                <div className="inventory">
                    {inventory.map((card) => (
                        <Card key={card.id} card={card} playable={gameData.stage !== "Results" ? true : false} onPlay={selectCard}/>
                    ))}
                </div>
            </div>
            <div className="game-container-center">
                {gameboard}
            </div>
            <div className="game-container-right">
                <div className="section-header">
                    <h3>Stats</h3>
                </div>
                <h3>Coins: {coins}</h3>
                <h3>Score: {gameData.score}</h3>
            </div>
        </div>
    );
}

export default Game;
import React, { useState } from "react";
import EmojiEvents from "@mui/icons-material/EmojiEventsRounded";
import SettingsSuggest from "@mui/icons-material/SettingsSuggestRounded";
import Warning from "@mui/icons-material/WarningRounded";
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
        playerNextCard: {
            id: uniqid(),
            name: "Player Card Back",
            type: "Card Back",
            strongAgainst: "None",
            weakAgainst: "None",
            winChance: 0
        },
        playerCardIsOnFront: false,
        computerCardIsOnFront: false,
        computerCurrentCard: {},
        computerNextCard: {
            id: uniqid(),
            name: "Computer Card Back",
            type: "Card Back",
            strongAgainst: "None",
            weakAgainst: "None",
            winChance: 0
        },
        winner: "",
        cardSelectAlert: {
            isOn: false,
            text: "You must select a card!"
        }
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
            playerCardIsOnFront: !gameData.playerCardIsOnFront,
            cardSelectAlert: {
                isOn: false,
                text: "You must select a card!"
            }
            }
        });                
    }
    
    function playRound(e) {
        if (gameData.playerNextCard.type === "Card Back") {
            setGameData((gameData) => {
                return {
                ...gameData,
                cardSelectAlert: {
                    isOn: true,
                    text: "You must select a card!"
                }
                }
            });
        } else {
            const playerChoice = gameData.playerNextCard;
            const computerChoice = generateComputerPlay();
            const roundWinner = declareWinner(playerChoice, computerChoice);
            setGameData((gameData) => {
                return {
                ...gameData,
                score: gameData.score + calculateRoundScore(roundWinner),
                stage: "Results",
                computerCurrentCard: gameData.computerNextCard,
                computerNextCard: computerChoice,
                computerCardIsOnFront: !gameData.computerCardIsOnFront,
                winner: roundWinner
                }
            });
            setCoins((coins) => coins + calculateRoundCoins(roundWinner));
        }
    } 

    function resetGameData() {
        setGameData((gameData) => {
            return {
            ...gameData,
            round: gameData.round + 1,
            stage: "Play",
            playerCurrentCard: gameData.playerNextCard,
            playerNextCard: {
                id: uniqid(),
                name: "Player Card Back",
                type: "Card Back",
                strongAgainst: "None",
                weakAgainst: "None",
                winChance: 0
            },
            playerCardIsOnFront: !gameData.playerCardIsOnFront,
            computerCurrentCard: gameData.computerNextCard,
            computerNextCard: {
                id: uniqid(),
                name: "Computer Card Back",
                type: "Card Back",
                strongAgainst: "None",
                weakAgainst: "None",
                winChance: 0
            },
            computerCardIsOnFront: !gameData.computerCardIsOnFront,
            winner: ""
            }
        });        
    }

    let gameboard;
    if (gameData.stage === "Play") {
        gameboard = 
        <div className="gameboard">
            <p className="instructions">Play a card.</p>
            <div className="gameboard-card-container">
                <div className="player-card-container">
                    <h3>You</h3>
                    <GameboardCard 
                        currentCard={gameData.playerCurrentCard}
                        nextCard={gameData.playerNextCard}
                        isOnFront={gameData.playerCardIsOnFront}
                    />
                </div>
                <div className="computer-card-container">
                    <h3>Computer</h3>
                    <GameboardCard 
                        currentCard={gameData.computerCurrentCard}
                        nextCard={gameData.computerNextCard}
                        isOnFront={gameData.computerCardIsOnFront}
                    />                
                </div>
            </div>
            <div className="btn-container">
                <button className="confirm-btn" onClick={playRound}>Confirm</button>
                {gameData.cardSelectAlert.isOn && 
                    <div className="card-select-alert">
                        <Warning />
                        <b>{gameData.cardSelectAlert.text}</b>
                    </div>
                }
            </div>
        </div>      
    } else if (gameData.stage === "Results") {
        gameboard = 
        <div className="gameboard">
            <p className="instructions">Winner: {gameData.winner}</p>
            <div className="gameboard-card-container">
                <div className="player-card-container">
                    <h3>You</h3>
                    <GameboardCard 
                        currentCard={gameData.playerCurrentCard}
                        nextCard={gameData.playerNextCard}
                        isOnFront={gameData.playerCardIsOnFront}
                    />
                </div>
                <div className="computer-card-container">
                    <h3>Computer</h3>
                    <GameboardCard 
                        currentCard={gameData.computerCurrentCard}
                        nextCard={gameData.computerNextCard}
                        isOnFront={gameData.computerCardIsOnFront}
                    />                
                </div>
            </div> 
            <div className="btn-container">
                <button onClick={resetGameData}>Next</button>
            </div>
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
                <div className="section-header">
                    <h3>Round {gameData.round}</h3>
                </div>
                {gameboard}
            </div>
            <div className="game-container-right">
                <div className="section-header">
                    <h3>Stats</h3>
                </div>
                <h3>
                    <SettingsSuggest />
                    Coins: {coins}
                </h3>
                <h3>
                    <EmojiEvents />
                    Score: {gameData.score}
                </h3>
            </div>
        </div>
    );
}

export default Game;
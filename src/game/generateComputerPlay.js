import uniqid from "uniqid";

function generateComputerPlay() {
    const computerCards = [
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
    ];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerCards[randomNumber];
}

export default generateComputerPlay;
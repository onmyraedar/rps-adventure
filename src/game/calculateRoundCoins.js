function calculateRoundCoins(winner) {
    if (winner === "Player") {
        return 3;
    } else if (winner === "Draw") {
        return 1; 
    } else if (winner === "Computer") {
        return 0;
    }
}

export default calculateRoundCoins;
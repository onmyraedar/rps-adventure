function calculateRoundScore(winner) {
    if (winner === "Player") {
        return 1;
    } else {
        return 0;
    }
}

export default calculateRoundScore;
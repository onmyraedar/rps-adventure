function declareWinner(playerCard, computerCard) {
    if (playerCard.type === computerCard.type) {
        return "Draw";
    } else {
        if (playerCard.type === "Rock" && computerCard.type === "Scissors") {
            return "Player";
        } else if (playerCard.type === "Rock" && computerCard.type === "Paper") {
            return "Computer";
        } else if (playerCard.type === "Paper" && computerCard.type === "Rock") {
            return "Player";
        } else if (playerCard.type === "Paper" && computerCard.type === "Scissors") {
            return "Computer";
        } else if (playerCard.type === "Scissors" && computerCard.type === "Paper") {
            return "Player";
        } else if (playerCard.type === "Scissors" && computerCard.type === "Rock") {
            return "Computer";
        }
    }
}

export default declareWinner;
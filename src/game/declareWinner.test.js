import declareWinner from "./declareWinner";

test("Player Rock beats Computer Scissors", () => {
    const playerCard = {
        id: "C1Rock",
        name: "Pebble",
        type: "Rock",
        strongAgainst: "Scissors",
        weakAgainst: "Paper",
        winChance: 100 
    }
    const computerCard = {
        id: "C2Scissors",
        name: "Blunt Tip",
        type: "Scissors",
        strongAgainst: "Paper",
        weakAgainst: "Rock",
        winChance: 100 
    }
    expect(declareWinner(playerCard, computerCard)).toBe("Player");
});

test("Player Rock loses to Computer Paper", () => {
    const playerCard = {
        id: "C1Rock",
        name: "Pebble",
        type: "Rock",
        strongAgainst: "Scissors",
        weakAgainst: "Paper",
        winChance: 100 
    }
    const computerCard = {
        id: "C2Paper",
        name: "Looseleaf",
        type: "Paper",
        strongAgainst: "Rock",
        weakAgainst: "Scissors",
        winChance: 100 
    }
    expect(declareWinner(playerCard, computerCard)).toBe("Computer");
});

test("Player Rock ties with Computer Rock", () => {
    const playerCard = {
        id: "C1Rock",
        name: "Pebble",
        type: "Rock",
        strongAgainst: "Scissors",
        weakAgainst: "Paper",
        winChance: 100 
    }
    const computerCard = {
        id: "C2Rock",
        name: "Pebble",
        type: "Rock",
        strongAgainst: "Scissors",
        weakAgainst: "Paper",
        winChance: 100 
    }
    expect(declareWinner(playerCard, computerCard)).toBe("Draw");
});

test("Player Paper beats Computer Rock", () => {
    const playerCard = {
        id: "C1Paper",
        name: "Looseleaf",
        type: "Paper",
        strongAgainst: "Rock",
        weakAgainst: "Scissors",
        winChance: 100 
    }
    const computerCard = {
        id: "C2Rock",
        name: "Pebble",
        type: "Rock",
        strongAgainst: "Scissors",
        weakAgainst: "Paper",
        winChance: 100 
    }
    expect(declareWinner(playerCard, computerCard)).toBe("Player");
});

test("Player Paper loses to Computer Scissors", () => {
    const playerCard = {
        id: "C1Paper",
        name: "Looseleaf",
        type: "Paper",
        strongAgainst: "Rock",
        weakAgainst: "Scissors",
        winChance: 100 
    }
    const computerCard = {
        id: "C2Scissors",
        name: "Blunt Tip",
        type: "Scissors",
        strongAgainst: "Paper",
        weakAgainst: "Rock",
        winChance: 100 
    }
    expect(declareWinner(playerCard, computerCard)).toBe("Computer");
});

test("Player Paper ties with Computer Paper", () => {
    const playerCard = {
        id: "C1Paper",
        name: "Looseleaf",
        type: "Paper",
        strongAgainst: "Rock",
        weakAgainst: "Scissors",
        winChance: 100 
    }
    const computerCard = {
        id: "C2Paper",
        name: "Looseleaf",
        type: "Paper",
        strongAgainst: "Rock",
        weakAgainst: "Scissors",
        winChance: 100 
    }
    expect(declareWinner(playerCard, computerCard)).toBe("Draw");
});

test("Player Scissors beats Computer Paper", () => {
    const playerCard = {
        id: "C1Scissors",
        name: "Blunt Tip",
        type: "Scissors",
        strongAgainst: "Paper",
        weakAgainst: "Rock",
        winChance: 100 
    }
    const computerCard = {
        id: "C2Paper",
        name: "Looseleaf",
        type: "Paper",
        strongAgainst: "Rock",
        weakAgainst: "Scissors",
        winChance: 100 
    }
    expect(declareWinner(playerCard, computerCard)).toBe("Player");
});

test("Player Scissors loses to Computer Rock", () => {
    const playerCard = {
        id: "C1Scissors",
        name: "Blunt Tip",
        type: "Scissors",
        strongAgainst: "Paper",
        weakAgainst: "Rock",
        winChance: 100 
    }
    const computerCard = {
        id: "C2Rock",
        name: "Pebble",
        type: "Rock",
        strongAgainst: "Scissors",
        weakAgainst: "Paper",
        winChance: 100 
    }
    expect(declareWinner(playerCard, computerCard)).toBe("Computer");
});

test("Player Scissors ties with Computer Scissors", () => {
    const playerCard = {
        id: "C1Scissors",
        name: "Blunt Tip",
        type: "Scissors",
        strongAgainst: "Paper",
        weakAgainst: "Rock",
        winChance: 100 
    }
    const computerCard = {
        id: "C2Scissors",
        name: "Blunt Tip",
        type: "Scissors",
        strongAgainst: "Paper",
        weakAgainst: "Rock",
        winChance: 100 
    }
    expect(declareWinner(playerCard, computerCard)).toBe("Draw");
});

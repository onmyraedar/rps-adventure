import Card from "./Card.js";
import "./GameboardCard.css";

function GameboardCard(props) {
    const { currentCard, nextCard, isOnFront } = props;

    return(
        <div className="player-card">
            <div className={isOnFront ? "player-card-content player-card-flipped" : "player-card-content"}>
                <div className="player-card-front">
                    { isOnFront
                        ? <Card key={currentCard.id} card={currentCard} playable={false} onPlay={() => console.log("Should not be playable")}/> 
                        : <Card key={nextCard.id} card={nextCard} playable={false} onPlay={() => console.log("Should not be playable")}/>
                    }
                </div>
                <div className="player-card-back">
                    { isOnFront
                        ? <Card key={nextCard.id} card={nextCard} playable={false} onPlay={() => console.log("Should not be playable")}/>
                        : <Card key={currentCard.id} card={currentCard} playable={false} onPlay={() => console.log("Should not be playable")}/> 
                    }
                </div>
            </div>
        </div>
    );
}

export default GameboardCard;
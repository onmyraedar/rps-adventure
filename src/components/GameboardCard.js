import Card from "./Card.js";
import "./GameboardCard.css";

function GameboardCard(props) {
    const { currentCard, nextCard, isOnFront } = props;

    return(
        <div className="card">
            <div className={isOnFront ? "card-content card-flipped" : "card-content"}>
                <div className="card-front">
                    { isOnFront
                        ? <Card key={currentCard.id} card={currentCard} playable={false} onPlay={() => console.log("Should not be playable")}/> 
                        : <Card key={nextCard.id} card={nextCard} playable={false} onPlay={() => console.log("Should not be playable")}/>
                    }
                </div>
                <div className="card-back">
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
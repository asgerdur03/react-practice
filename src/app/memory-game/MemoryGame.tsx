import React, { useState, useEffect } from "react";
import { set, shuffle } from "lodash";
import MemoryCard from "./MemoryCard";
// only accept a string array
type MemoryGameProps = {
    images: string[];
};

type GameCard = {
    id: number;
    image: string;
    isflipped: boolean;
    ismatched: boolean;
};

function shuffleCards(images: string[]) {
    // stokkar og gerir 2 spil af hverju
    const duplicateCards = [...images, ...images];
    const deck: GameCard[] = duplicateCards.map((image, index) => ({
        id: index,
        image,
        isflipped: false,
        ismatched: false
    }));
    return shuffle(deck);
}

const MemoryGame = ({ images }: MemoryGameProps) => {
    

    const [cards, setCards] = useState<GameCard[]>([]);
    const [selecedCards, setSelectedCards] = useState<GameCard[]>([]);
    const [islocked, setIsLocked] = useState(false);


    useEffect(() => {
        setCards(shuffleCards(images));
        setSelectedCards([]);
        setIsLocked(false);
    }, [images]);


    const handleCardClick = (clicked: GameCard) => {

        if (islocked) {return;}
        if (clicked.isflipped) {return;}
        if (selecedCards.length === 2) {return;}

        // flip card, add to selected
        setCards((prevCards) => 
            prevCards.map((card) => (card.id === clicked.id ? {...card, isflipped: true} : card))
        );  

        setSelectedCards((prev) => [...prev, clicked]);   
    };

    const restartGame = () => {
        setCards(shuffleCards(images));
        setSelectedCards([]);
        setIsLocked(false);
    };

    useEffect(() => {

        if (selecedCards.length !== 2) {return;}
        setIsLocked(true);

        const [first, second] = selecedCards;

        if (!first || !second) {
            setSelectedCards([]);
            setIsLocked(false);
            return;
        }

        if (first.image === second.image) {
            // merkja matched, ekki snúa aftur, en aflæsa spilum
            setCards((prevCards) =>
                prevCards.map((card) => (card.id === first.id || card.id === second.id ? {...card, ismatched: true} : card))
            );
            setSelectedCards([]);
            setIsLocked(false);
        }else {
            // snúa við eftir 1 sek
            setTimeout(() => {
                setCards((prevCards) => 
                    prevCards.map((card) => (card.id === first.id || card.id === second.id ? {...card, isflipped: false} : card))
                );
                setSelectedCards([]);
                setIsLocked(false);
            }, 1000);
        }

    }, [selecedCards]); // rendering only when selectedCards changes
        
    const hasWon = cards.every((card) => card.ismatched);


    // TODO: Gera flottara UI
return (
    <div >
        <h1>Memory Game</h1>
        <button onClick={restartGame}>Restart</button>
        {hasWon && <h2>You won!</h2>}
        <div
            style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "10px" 
            }}>

        {cards.map((card) => (
            <MemoryCard
                key={card.id}
                cardId={card.id}
                image={card.image}
                isFlipped={card.isflipped}
                isMatched={card.ismatched}
                onClick={() => handleCardClick(card)}
                size={150}
            />
        ))}
        </div>
    </div>
);

};

export default MemoryGame;
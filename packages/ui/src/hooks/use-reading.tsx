import { useState } from 'react';

export type ReadingProp = {
    positionName: string;
    displayName: string;
    positionDescription: string;
    cardName: string;
    cardNumber: number;
    hex: string;
    image: string;
    index: number;
    reversed: boolean;
};

const useReading = () => {
    const [deck, setDeck] = useState(Array.from(Array(78).keys()));
    const [reversals, setReversals] = useState(deck.map(c => false));

    const shuffleDeck = () => {
        let shuffledDeck = [...deck];

        let counter = shuffledDeck.length;
        let temp, index;
        while (counter > 0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = shuffledDeck[counter];
            shuffledDeck[counter] = shuffledDeck[index];
            shuffledDeck[index] = temp;
        }
        setDeck(shuffledDeck);
        setReversals(shuffledDeck.map(c => Math.floor(Math.random() * 360) > 180));
    };

    const cutDeck = (index: number) => {
        let shuffleDeck = [...deck];
        const move = shuffleDeck.splice(index, shuffleDeck.length);
        setDeck(move.concat(shuffleDeck));
    };

    const deal = ({ cards, spread }) =>
        spread.positions.map((pos, index) => ({
            positionName: pos.name,
            displayName: pos.displayName,
            positionDescription: pos.description,
            cardName: cards[deck[index]].name,
            cardNumber: cards[deck[index]].number,
            cardDescription: cards[deck[index]][pos.name],
            hex: cards[deck[index]].hex,
            image: cards[deck[index]].image,
            index: cards[deck[index]].index,
            reversed: reversals[index]
        }));

    return {
        cutDeck,
        deal,
        deck,
        shuffleDeck
    };
};

export default useReading;

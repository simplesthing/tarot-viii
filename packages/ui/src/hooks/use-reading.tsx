import { useState } from 'react';

export type ReadingProp = {
    positionName: string;
    displayName: string;
    positionDescription: string;
    cardName: string;
    cardNumber: string;
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

    const deal = ({ cards, spread }) => {
        const reading = spread.positions.map((pos, index) => {
            const desc = !!reversals[index]
                ? cards[index].celtic_cross.reversed[pos.name]
                : cards[index].celtic_cross.upright[pos.name];
            return {
                positionName: pos.name,
                displayName: pos.displayName,
                positionDescription: pos.description,
                cardName: cards[index].name,
                cardNumber: cards[index].number,
                cardDescription: desc,
                hex: cards[index].hex,
                image: cards[index].image,
                index: cards[index].index,
                reversed: !!reversals[index]
            };
        });
        return reading;
    };

    return {
        cutDeck,
        deal,
        deck,
        shuffleDeck
    };
};

export default useReading;

import { useState } from 'react';

function createDeck(arr) {
    var tmp,
        cur,
        len = arr.length;
    if (len)
        while (--len) {
            cur = Math.floor(Math.random() * (len + 1));
            tmp = arr[cur];
            arr[cur] = arr[len];
            arr[len] = tmp;
        }
    return arr;
}

const useReading = () => {
    const [deck, setDeck] = useState(createDeck(Array.from(Array(78).keys())));
    const [reversals, setReversals] = useState(deck.map(c => false));
    console.log(deck);
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
            const isReversed = !!reversals[index];
            const desc = isReversed
                ? cards[index].celtic_cross.reversed[pos.name]
                : cards[index].celtic_cross.upright[pos.name];
            return {
                positionName: pos.name,
                displayName: pos.displayName,
                positionDescription: pos.description,
                cardName: cards[index].name,
                cardTitle: cards[index]?.title || '',
                cardNumber: cards[index].number,
                cardDescription: cards[index]?.description || '',
                cardReading: desc,
                element: cards[index]?.element || '',
                exaltation: cards[index]?.exaltation || '',
                hex: cards[index].hex,
                image: cards[index].image,
                index: cards[index].index,
                path: cards[index]?.path || '',
                keywords: isReversed
                    ? cards[index]?.reversedKeywords || ''
                    : cards[index]?.keywords || '',
                reversed: isReversed
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

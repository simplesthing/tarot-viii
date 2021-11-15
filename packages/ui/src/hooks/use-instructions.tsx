import { useState } from 'react';

const DEFAULT = [
    'Think of a question ... \n tap cards once you have a question in your mind.',
    'You must cut the deck 3 times. \n Tap the cards where you want the cards to be cut.',
    'Allow your mind to explore your question a little deeper while the cards shuffle, \n tap the cards to stop the shuffle at any time',
    'Tap the cards where you want the cards to be cut.',
    'Finally allow your mind to open to possible answers, \n tap cards to stop shuffling when you are ready',
    'Tap the cards where would like to make the final cut.'
];

const useInstructions = (instructions: string[] = DEFAULT) => {
    const [count, setCount] = useState(0);
    const [instruction, setInstruction] = useState(instructions[count]);

    const next = () => {
        setCount(count + 1);
        setInstruction(instructions[count + 1]);
    };

    return {
        count,
        instruction,
        next
    };
};
export default useInstructions;

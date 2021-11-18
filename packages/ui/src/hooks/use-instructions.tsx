import { useState } from 'react';

const DEFAULT = [
    'Think of a question ...tap cards once you have a question in your mind.',
    'You must cut the deck 3 times. Tap the cards to be cut.',
    'Allow your mind to explore your question a while the cards shuffle, tap any card to stop the shuffle, at any time',
    'Still focused on the question, tap a card to cut the deck',
    'Allow yourself to accept all possibilities as answers to your question, tap any card to stop shuffling.',
    'When you are ready, tap the card where a final cut is to be made.',
    'Tap the deck to reveal the first card in the reading, the situation card'
];

const useInstructions = (instructions: string[] = DEFAULT) => {
    const [count, setCount] = useState(0);
    const [instruction, setInstruction] = useState(instructions[count]);

    const next = (from?: number) => {
        const _count = from ? from : count + 1;
        setCount(_count);
        setInstruction(instructions[_count]);
    };

    const instructionAt = (index: number) => {
        return instructions[index];
    };

    return {
        count,
        instruction,
        instructionAt,
        next
    };
};
export default useInstructions;

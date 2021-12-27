export type ReadingProp = {
    cardName: string;
    cardNumber: string;
    cardDescription: string;
    cardReading: string;
    displayName: string;
    element: string;
    exaltation: string;
    hex: string;
    image: string;
    index: number;
    keywords: string;
    title: string;
    positionDescription: string;
    positionName: string;
    reversed: boolean;
};

export type ReadingDoc = {
    id: string;
    userId: string;
    reading: ReadingProp[];
    notes?: string;
    title?: string;
    creationTime: string;
};

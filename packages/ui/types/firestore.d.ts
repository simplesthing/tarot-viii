export type ReadingProp = {
    positionDescription: string;
    positionName: string;
    cardName: string;
    cardNumber: string;
    cardDescription: string;
    cardReading: string;
    cardTitle?: string;
    displayName: string;
    element?: string;
    exaltation?: string;
    hex: string;
    image: string;
    index: number;
    path?: string;
    keywords?: string;
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

export type ReadingProp = {
    cardName: string;
    cardNumber: string;
    displayName: string;
    hex: string;
    image: string;
    index: number;
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

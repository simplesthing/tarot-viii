import React from 'react';

const useJpegCards = (card: number, props: any) => {
    const base = '/assets/images/cards/smith-waite';

    if (card >= 0 && card <= 21) {
        return `/${base}/major-arcana/${card}.jpg`;
    }

    if (card >= 22 && card <= 35) {
        return `/${base}/wands/wand_${card}.jpg`;
    }

    if (card >= 36 && card <= 49) {
        return `/${base}/cups/cup_${card}.jpg`;
    }

    if (card >= 50 && card <= 63) {
        return `/${base}/swords/sword_${card}.jpg`;
    }

    if (card >= 64) {
        return `/${base}/coins/coins_${card}.jpg`;
    }
    return undefined;
};

export default useJpegCards;

import React from 'react';
import {
    Arcana0Fool,
    Arcana10Wheel,
    Arcana11Justice,
    Arcana12HangedMan,
    Arcana13Death,
    Arcana14Temperance,
    Arcana15Devil,
    Arcana16Tower,
    Arcana17Star,
    Arcana18Moon,
    Arcana19Sun,
    Arcana1Magus,
    Arcana20Judgement,
    Arcana21World,
    Arcana2HighPriestess,
    Arcana3Empress,
    Arcana4Emperor,
    Arcana5Hierophant,
    Arcana6Lovers,
    Arcana7Chariot,
    Arcana8Strength,
    Arcana9Hermit
    } from './major-arcana';
import {
    Coin1,
    Coin10,
    Coin2,
    Coin3,
    Coin4,
    Coin5,
    Coin6,
    Coin7,
    Coin8,
    Coin9,
    CoinKing,
    CoinKnight,
    CoinPage,
    CoinQueen
    } from './coins';
import {
    Cup1,
    Cup10,
    Cup2,
    Cup3,
    Cup4,
    Cup5,
    Cup6,
    Cup7,
    Cup8,
    Cup9,
    CupKing,
    CupKnight,
    CupPage,
    CupQueen
    } from './cups';
import {
    Sword1,
    Sword10,
    Sword2,
    Sword3,
    Sword4,
    Sword5,
    Sword6,
    Sword7,
    Sword8,
    Sword9,
    SwordKing,
    SwordKnight,
    SwordPage,
    SwordQueen
    } from './swords';
import {
    Wand1,
    Wand10,
    Wand2,
    Wand3,
    Wand4,
    Wand5,
    Wand6,
    Wand7,
    Wand8,
    Wand9,
    WandKing,
    WandKnight,
    WandPage,
    WandQueen
    } from './wands';


const useSvgCards = (card: number, props: any) => {
    var comp;
    switch (card) {
        case 0:
            comp = <Arcana0Fool strokeWidth="1" fill="black" {...props} />;
            break;
        case 1:
            comp = <Arcana1Magus strokeWidth="1" fill="black" {...props} />;
            break;
        case 2:
            comp = <Arcana2HighPriestess strokeWidth="1" fill="black" {...props} />;
            break;
        case 3:
            comp = <Arcana3Empress strokeWidth="1" fill="black" {...props} />;
            break;
        case 4:
            comp = <Arcana4Emperor strokeWidth="1" fill="black" {...props} />;
            break;
        case 5:
            comp = <Arcana5Hierophant strokeWidth="1" fill="black" {...props} />;
            break;
        case 6:
            comp = <Arcana6Lovers strokeWidth="1" fill="black" {...props} />;
            break;
        case 7:
            comp = <Arcana7Chariot strokeWidth="1" fill="black" {...props} />;
            break;
        case 8:
            comp = <Arcana8Strength strokeWidth="1" fill="black" {...props} />;
            break;
        case 9:
            comp = <Arcana9Hermit strokeWidth="1" fill="black" {...props} />;
            break;
        case 10:
            comp = <Arcana10Wheel strokeWidth="1" fill="black" {...props} />;
            break;
        case 11:
            comp = <Arcana11Justice strokeWidth="1" fill="black" {...props} />;
            break;
        case 12:
            comp = <Arcana12HangedMan strokeWidth="1" fill="black" {...props} />;
            break;
        case 13:
            comp = <Arcana13Death strokeWidth="1" fill="black" {...props} />;
            break;
        case 14:
            comp = <Arcana14Temperance strokeWidth="1" fill="black" {...props} />;
            break;
        case 15:
            comp = <Arcana15Devil strokeWidth="1" fill="black" {...props} />;
            break;
        case 16:
            comp = <Arcana16Tower strokeWidth="1" fill="black" {...props} />;
            break;
        case 17:
            comp = <Arcana17Star strokeWidth="1" fill="black" {...props} />;
            break;
        case 18:
            comp = <Arcana18Moon strokeWidth="1" fill="black" {...props} />;
            break;
        case 19:
            comp = <Arcana19Sun strokeWidth="1" fill="black" {...props} />;
            break;
        case 20:
            comp = <Arcana20Judgement strokeWidth="1" fill="black" {...props} />;
            break;
        case 21:
            comp = <Arcana21World strokeWidth="1" fill="black" {...props} />;
            break;
        case 22:
            comp = <Wand1 strokeWidth="1" fill="black" {...props} />;
            break;
        case 23:
            comp = <Wand2 strokeWidth="1" fill="black" {...props} />;
            break;
        case 24:
            comp = <Wand3 strokeWidth="1" fill="black" {...props} />;
            break;
        case 25:
            comp = <Wand4 strokeWidth="1" fill="black" {...props} />;
            break;
        case 26:
            comp = <Wand5 strokeWidth="1" fill="black" {...props} />;
            break;
        case 27:
            comp = <Wand6 strokeWidth="1" fill="black" {...props} />;
            break;
        case 28:
            comp = <Wand7 strokeWidth="1" fill="black" {...props} />;
            break;
        case 29:
            comp = <Wand8 strokeWidth="1" fill="black" {...props} />;
            break;
        case 30:
            comp = <Wand9 strokeWidth="1" fill="black" {...props} />;
            break;
        case 31:
            comp = <Wand10 strokeWidth="1" fill="black" {...props} />;
            break;
        case 32:
            comp = <WandPage strokeWidth="1" fill="black" {...props} />;
            break;
        case 33:
            comp = <WandKnight strokeWidth="1" fill="black" {...props} />;
            break;
        case 34:
            comp = <WandQueen strokeWidth="1" fill="black" {...props} />;
            break;
        case 35:
            comp = <WandKing strokeWidth="1" fill="black" {...props} />;
            break;
        case 36:
            comp = <Cup1 strokeWidth="1" fill="black" {...props} />;
            break;
        case 37:
            comp = <Cup2 strokeWidth="1" fill="black" {...props} />;
            break;
        case 38:
            comp = <Cup3 strokeWidth="1" fill="black" {...props} />;
            break;
        case 39:
            comp = <Cup4 strokeWidth="1" fill="black" {...props} />;
            break;
        case 40:
            comp = <Cup5 strokeWidth="1" fill="black" {...props} />;
            break;
        case 41:
            comp = <Cup6 strokeWidth="1" fill="black" {...props} />;
            break;
        case 42:
            comp = <Cup7 strokeWidth="1" fill="black" {...props} />;
            break;
        case 43:
            comp = <Cup8 strokeWidth="1" fill="black" {...props} />;
            break;
        case 44:
            comp = <Cup9 strokeWidth="1" fill="black" {...props} />;
            break;
        case 45:
            comp = <Cup10 strokeWidth="1" fill="black" {...props} />;
            break;
        case 46:
            comp = <CupPage strokeWidth="1" fill="black" {...props} />;
            break;
        case 47:
            comp = <CupKnight strokeWidth="1" fill="black" {...props} />;
            break;
        case 48:
            comp = <CupQueen strokeWidth="1" fill="black" {...props} />;
            break;
        case 49:
            comp = <CupKing strokeWidth="1" fill="black" {...props} />;
            break;
        case 50:
            comp = <Sword1 strokeWidth="1" fill="black" {...props} />;
            break;
        case 51:
            comp = <Sword2 strokeWidth="1" fill="black" {...props} />;
            break;
        case 52:
            comp = <Sword3 strokeWidth="1" fill="black" {...props} />;
            break;
        case 53:
            comp = <Sword4 strokeWidth="1" fill="black" {...props} />;
            break;
        case 54:
            comp = <Sword5 strokeWidth="1" fill="black" {...props} />;
            break;
        case 55:
            comp = <Sword6 strokeWidth="1" fill="black" {...props} />;
            break;
        case 56:
            comp = <Sword7 strokeWidth="1" fill="black" {...props} />;
            break;
        case 57:
            comp = <Sword8 strokeWidth="1" fill="black" {...props} />;
            break;
        case 58:
            comp = <Sword9 strokeWidth="1" fill="black" {...props} />;
            break;
        case 59:
            comp = <Sword10 strokeWidth="1" fill="black" {...props} />;
            break;
        case 60:
            comp = <SwordPage strokeWidth="1" fill="black" {...props} />;
            break;
        case 61:
            comp = <SwordKnight strokeWidth="1" fill="black" {...props} />;
            break;
        case 62:
            comp = <SwordQueen strokeWidth="1" fill="black" {...props} />;
            break;
        case 63:
            comp = <SwordKing strokeWidth="1" fill="black" {...props} />;
            break;
        case 64:
            comp = <Coin1 strokeWidth="1" fill="black" {...props} />;
            break;
        case 65:
            comp = <Coin2 strokeWidth="1" fill="black" {...props} />;
            break;
        case 66:
            comp = <Coin3 strokeWidth="1" fill="black" {...props} />;
            break;
        case 67:
            comp = <Coin4 strokeWidth="1" fill="black" {...props} />;
            break;
        case 68:
            comp = <Coin5 strokeWidth="1" fill="black" {...props} />;
            break;
        case 69:
            comp = <Coin6 strokeWidth="1" fill="black" {...props} />;
            break;
        case 70:
            comp = <Coin7 strokeWidth="1" fill="black" {...props} />;
            break;
        case 71:
            comp = <Coin8 strokeWidth="1" fill="black" {...props} />;
            break;
        case 72:
            comp = <Coin9 strokeWidth="1" fill="black" {...props} />;
            break;
        case 73:
            comp = <Coin10 strokeWidth="1" fill="black" {...props} />;
            break;
        case 74:
            comp = <CoinPage strokeWidth="1" fill="black" {...props} />;
            break;
        case 75:
            comp = <CoinKnight strokeWidth="1" fill="black" {...props} />;
            break;
        case 76:
            comp = <CoinQueen strokeWidth="1" fill="black" {...props} />;
            break;
        case 77:
            comp = <CoinKing strokeWidth="1" fill="black" {...props} />;
            break;
    }
    return comp;
};

export default useSvgCards;

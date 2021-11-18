import React, { useState } from 'react';
import { Background, Deal, ShuffleAnimation } from '@tarot-viii/ui';

const Reading = () => {
    const [shuffleDone, setShuffleDone] = useState(false);

    // @ts-ignore
    const [dealDone, setDealDone] = useState(false);

    return (
        <Background>
            {!shuffleDone && <ShuffleAnimation done={() => setShuffleDone(true)} />}
            {shuffleDone && <Deal done={() => setDealDone(true)} />}
        </Background>
    );
};

export default Reading;

import dynamic from 'next/dynamic';

const Reading = dynamic(() => import('@tarot-viii/app/reading/shuffle-deal'), {
    ssr: false
});
export default function Page() {
    const getCards = async (index: string[]) => Promise.resolve([{}]);

    const generateReadingDoc = () => ({});

    const openReading = () => ({});

    return (
        <Reading
            getCards={getCards}
            generateReadingDoc={generateReadingDoc}
            openReading={openReading}
        />
    );
}

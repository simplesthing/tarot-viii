import dynamic from 'next/dynamic';

const Reading = dynamic(() => import('@tarot-viii/app/reading/shuffle-deal'), {
    ssr: false
});
export default function Page() {
    return <Reading />;
}

import { getImageUrlFromSanityObject } from '../../utils/sanity';

const Hero = ({ heroData }) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('Hero Component - heroData:', JSON.stringify(heroData, null, 2));
    }

    let backgroundImageUrl = null;
    if (heroData?.background) {
        backgroundImageUrl = getImageUrlFromSanityObject(heroData.background);
        if (process.env.NODE_ENV === 'development') {
            console.log('Background Image URL:', backgroundImageUrl);
        }
    }

    // if (!backgroundImageUrl) {
    //     backgroundImageUrl = '/img/hero.webp';
    // }

    const title = heroData?.title;

    return (
        <section
            className="relative h-[40vh] md:h-[52vh] w-full grid place-items-center text-white"
            style={{
                backgroundImage: `url("${backgroundImageUrl}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/30" />
            <h1 className="relative z-10 text-3xl md:text-5xl tracking-wider font-semibold uppercase">
                {title}
            </h1>
        </section >
    );
}

export default Hero;
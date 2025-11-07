import { getImageUrlFromSanityObject } from '../../utils/sanity';

const Partner = ({ whyPartnerData }) => {
    // Get image URL from Sanity
    const imageUrl = whyPartnerData?.image 
        ? getImageUrlFromSanityObject(whyPartnerData.image)
        : '/img/partner1.webp'; // Fallback image
    
    // Get data from Sanity or use fallbacks
    const eyebrow = whyPartnerData?.eyebrow || 'PARTNER WITH SOCA SHORES';
    const title = whyPartnerData?.title || 'Why Partner With Us?';
    const intro = whyPartnerData?.intro || '';
    const bullets = whyPartnerData?.bullets || [];
    const imageAlt = whyPartnerData?.image?.alt || 'Soca Shores Partnership Solutions';

    // Split intro text - it contains the main text and closing text separated by \n\n
    const introParts = intro.split('\n\n');
    const mainIntro = introParts[0] || '';
    const closingText = introParts[1] || '';

    return (
        <section className="w-full bg-white h-[867px]">
            <div className="grid md:grid-cols-2 w-full h-full">

                {/* LEFT SIDE - TEXT CONTENT */}
                <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 h-full">
                    {eyebrow && (
                        <p className="partner-heading">
                            {eyebrow}
                        </p>
                    )}

                    {title && (
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">
                            {title}
                        </h2>
                    )}

                    {mainIntro && (
                        <p className="mt-5 text-base text-neutral-700 leading-relaxed">
                            {mainIntro}
                        </p>
                    )}

                    {bullets && bullets.length > 0 && (
                        <ul className="mt-6 space-y-4 text-base text-neutral-800">
                            {bullets.map((bullet, index) => {
                                // Extract the bold part and regular text
                                const parts = bullet.split(':');
                                const boldText = parts[0] || '';
                                const regularText = parts.slice(1).join(':').trim();
                                
                                return (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="mt-2 size-2 rounded-full bg-[#62B5E1]"></span>
                                        <span>
                                            {boldText && <strong>{boldText}:</strong>}
                                            {regularText && ` ${regularText}`}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    {closingText && (
                        <p className="mt-6 text-neutral-700 leading-relaxed">
                            {closingText}
                        </p>
                    )}
                </div>

                {/* RIGHT SIDE - IMAGE */}
                <div className="w-full h-full">
                    <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Partner;

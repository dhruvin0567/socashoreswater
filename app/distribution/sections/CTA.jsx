import { getImageUrlFromSanityObject } from '../../utils/sanity';

const CTA = ({ ctaData, fastLeadTimesData }) => {
    // Get image URL from Sanity (using fastLeadTimesData for the image)
    const imageUrl = fastLeadTimesData?.image 
        ? getImageUrlFromSanityObject(fastLeadTimesData.image)
        : '/img/cta.webp'; // Fallback image
    
    // Get data from Sanity or use fallbacks
    const title = fastLeadTimesData?.title || 'FAST LEAD TIMES + LONG SHELF LIFE';
    const description = fastLeadTimesData?.description || 'Efficiency meets longevity with Soca Shores:';
    const bullets = fastLeadTimesData?.bullets || [];
    const imageAlt = fastLeadTimesData?.image?.alt || 'Soca Shores Fast Lead Times';

    return (
        <section className="w-full bg-white relative h-[354px]">
            {/* Light blue horizontal line at the top */}
            <div className="w-full h-[1px] bg-[#62B5E1]"></div>
            
            <div className="grid md:grid-cols-2 w-full h-[353px]">
                {/* LEFT SIDE - TEXT CONTENT */}
                <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 h-full">
                    {title && (
                        <h2 className="cta-heading">
                            {title}
                        </h2>
                    )}
                    
                    {description && (
                        <p className="mt-4 text-sm md:text-base text-neutral-600">
                            {description}
                        </p>
                    )}

                    {bullets && bullets.length > 0 && (
                        <ul className="mt-5 space-y-3 text-sm md:text-base text-neutral-700 list-disc list-inside pl-4">
                            {bullets.map((bullet, index) => {
                                // Extract the bold part and regular text
                                const parts = bullet.split(':');
                                const boldText = parts[0] || '';
                                const regularText = parts.slice(1).join(':').trim();
                                
                                return (
                                    <li key={index}>
                                        {boldText && (
                                            <strong className="font-bold text-neutral-900">{boldText}:</strong>
                                        )}
                                        {regularText && (
                                            <span className="text-neutral-600"> {regularText}</span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
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

export default CTA;


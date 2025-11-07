import { getImageUrlFromSanityObject } from '../../utils/sanity';

const Distribution = ({ globalDistributionData }) => {
    const imageUrl = globalDistributionData?.image
        ? getImageUrlFromSanityObject(globalDistributionData.image)
        : '/img/distribution_img.webp';

    const kicker = globalDistributionData?.kicker || '10,000,000+ Cartons Per Week Capacity';
    const title = globalDistributionData?.title || 'GLOBAL DISTRIBUTION';
    const intro = globalDistributionData?.intro || '';
    const regions = globalDistributionData?.regions || [];
    const imageAlt = globalDistributionData?.image?.alt || 'Soca Shores Global Distribution';

    const introParts = intro.split(/\n\n+/).filter(part => part.trim());
    const mainIntro = introParts[0] || '';
    const closingText = introParts[1] || '';

    return (
        <section className="w-full bg-white h-[867px]">
            <div className="grid md:grid-cols-2 w-full h-full">

                <div className="w-full h-full">
                    <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 h-full bg-[#1d2846]">
                    {kicker && (
                        <p className="partner-heading text-[#bde9fb] font-regular">
                            {kicker}
                        </p>
                    )}

                    {title && (
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
                            {title}
                        </h2>
                    )}

                    {mainIntro && (
                        <p className="mt-5 text-base text-neutral-700 leading-relaxed text-[#ffffffbf]">
                            {mainIntro}
                        </p>
                    )}

                    {regions && regions.length > 0 && (
                        <ul className="mt-6 space-y-4 text-base text-[#ffffffbf]">
                            {regions.map((region, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-2 size-2 rounded-full bg-[#ffffffbf]"></span>
                                    <span>
                                        <strong>{region}</strong>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {closingText && (
                        <p className="mt-6 text-neutral-700 leading-relaxed text-[#ffffffbf]">
                            {closingText}
                        </p>
                    )}
                </div>


            </div>
        </section>
    );
};

export default Distribution;

const Partner = () => {
    return (
        <section className="w-full bg-white h-[867px]">
            <div className="grid md:grid-cols-2 w-full h-full">

                {/* LEFT SIDE - TEXT CONTENT */}
                <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 h-full">
                    <p className="partner-heading">
                        Partner with Soca Shores
                    </p>

                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">
                        Why Partner With Us?
                    </h2>
                    <p className="mt-5 text-base text-neutral-700 leading-relaxed">
                        Choosing Soca Shores means aligning your brand with a premium, eco-conscious water
                        solution that delivers more than just hydration. Our partnerships are built on:
                    </p>

                    <ul className="mt-6 space-y-4 text-base text-neutral-800">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 size-2 rounded-full bg-[#62B5E1]"></span>
                            <span>
                                <strong>Sustainable Impact:</strong> Plant-based, fully recyclable cartons reduce
                                plastic waste and support a greener planet.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 size-2 rounded-full bg-[#62B5E1]"></span>
                            <span>
                                <strong>Health-First Quality:</strong> Pure Caribbean-sourced water with a pristine pH
                                of +7.5, rich in essential minerals and free of microplastics.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 size-2 rounded-full bg-[#62B5E1]"></span>
                            <span>
                                <strong>Versatility:</strong> Perfect for retail, hospitality, events, and wellness-focused
                                brands.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 size-2 rounded-full bg-[#62B5E1]"></span>
                            <span>
                                <strong>Scalable Supply:</strong> Our high-capacity production ensures reliable
                                fulfillment for partners of all sizes.
                            </span>
                        </li>
                    </ul>

                    <p className="mt-6 text-neutral-700 leading-relaxed">
                        Let your brand reflect your values — choose water that speaks to health,
                        sustainability, and premium quality.
                    </p>
                </div>

                {/* RIGHT SIDE - IMAGE */}
                <div className="w-full h-full">
                    <img
                        src="/img/partner1.webp"
                        alt="Soca Shores production line"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Partner;

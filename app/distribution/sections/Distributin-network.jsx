const Partner = () => {
    return (
        <section className="w-full bg-white h-[867px]">
            <div className="grid md:grid-cols-2 w-full h-full">

                {/* LEFT SIDE - IMAGE */}
                <div className="w-full h-full">
                    <img
                        src="/img/distribution_img.webp"
                        alt="Soca Shores production line"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                {/*  RIGHT SIDE - TEXT CONTENT */}
                <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 h-full bg-[#1d2846]">
                    <p className="partner-heading text-[#bde9fb] font-regular">
                        10,000,000+ Cartons Per Week Capacity
                    </p>

                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
                        Why Partner With Us?
                    </h2>
                    <p className="mt-5 text-base text-neutral-700 leading-relaxed text-[#ffffffbf]">
                        Choosing Soca Shores means aligning your brand with a premium, eco-conscious water
                        solution that delivers more than just hydration. Our partnerships are built on:
                    </p>

                    <ul className="mt-6 space-y-4 text-base text-[#ffffffbf]">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 size-2 rounded-full bg-[#ffffffbf]"></span>
                            <span>
                                <strong>The Caribbean</strong>
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 size-2 rounded-full bg-[#ffffffbf]"></span>
                            <span>
                                <strong>The Caribbean</strong>
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 size-2 rounded-full bg-[#ffffffbf]"></span>
                            <span>
                                <strong>The Caribbean</strong>
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 size-2 rounded-full bg-[#ffffffbf]"></span>
                            <span>
                                <strong>The Caribbean</strong>
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 size-2 rounded-full bg-[#ffffffbf]"></span>
                            <span>
                                <strong>The Caribbean</strong>
                            </span>
                        </li>

                    </ul>

                    <p className="mt-6 text-neutral-700 leading-relaxed">
                        Let your brand reflect your values — choose water that speaks to health,
                        sustainability, and premium quality.
                    </p>
                </div>


            </div>
        </section>
    );
};

export default Partner;

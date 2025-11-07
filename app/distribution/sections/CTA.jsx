const CTA = () => {
    return (
        <section className="w-full bg-white relative h-[354px]">
            {/* Light blue horizontal line at the top */}
            <div className="w-full h-[1px] bg-[#62B5E1]"></div>
            
            <div className="grid md:grid-cols-2 w-full h-[353px]">
                {/* LEFT SIDE - TEXT CONTENT */}
                <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 h-full">
                    <h2 className="cta-heading">
                        FAST LEAD TIMES + LONG SHELF LIFE
                    </h2>
                    
                    <p className="mt-4 text-sm md:text-base text-neutral-600">
                        Efficiency meets longevity with Soca Shores:
                    </p>

                    <ul className="mt-5 space-y-3 text-sm md:text-base text-neutral-700 list-disc list-inside pl-4">
                        <li>
                            <strong className="font-bold text-neutral-900">Speed to Market:</strong>{" "}
                            <span className="text-neutral-600">Quick turnaround times to meet your business demands.</span>
                        </li>
                        <li>
                            <strong className="font-bold text-neutral-900">2-Year Shelf Life:</strong>{" "}
                            <span className="text-neutral-600">Our advanced aseptic cartons keep water fresh without preservatives or refrigeration.</span>
                        </li>
                        <li>
                            <strong className="font-bold text-neutral-900">Reliable Stock:</strong>{" "}
                            <span className="text-neutral-600">Stay supplied with consistent, high-quality boxed water, ready when you are.</span>
                        </li>
                    </ul>
                </div>

                {/* RIGHT SIDE - IMAGE */}
                <div className="w-full h-full">
                    <img
                        src="/img/cta.webp"
                        alt="Soca Shores boxed water carton"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default CTA;


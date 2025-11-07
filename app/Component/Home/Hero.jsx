const Hero = () => {
    return (
        <section
            className="relative h-[40vh] md:h-[52vh] w-full grid place-items-center text-white"
            style={{
                backgroundImage: `url("/img/hero.webp")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/30" />
            <h1 className="relative z-10 text-3xl md:text-5xl tracking-wider font-semibold uppercase">
                Distribution
            </h1>
        </section >
    );
}

export default Hero;
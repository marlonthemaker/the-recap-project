const SectionHeading = ({ title, subtitle }) => {
    return (
        <>
            <h2 className="text-center text-base/7 font-semibold text-indigo-600">{title}</h2>
            <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                {subtitle}
            </p>
        </>
    );
};

export default SectionHeading;
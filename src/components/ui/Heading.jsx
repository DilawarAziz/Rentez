
const Heading = ({ type, children, className }) => {
    switch (type) {
        case 1:
            return <h1 className={'2xl:text-6xl xl:text-4xl lg:text-2xl font-bold uppercase'}>{children}</h1>;
        case 2:
            return <h2 className={'text-4xl font-bold'}>{children}</h2>;
        case 3:
            return <h3 className={'text-2xl font-bold'}>{children}</h3>;
        case 4:
            return <h4 className={'text-xl font-semibold'}>{children}</h4>;
        case 5:
            return <h5 className={'text-lg font-semibold'}>{children}</h5>;
        case 6:
            return <h6 className={'text-base font-medium'}>{children}</h6>;
        case 'heading':
            return <h1 className={` xl:text-5xl lg:text-4xl md:text-3xl text-2xl  font-bold  ${className}`}>{children}</h1>;
        case 'subheading':
            return <h2 className={`  lg:text-2xl text-xl   font-bold  ${className}`}>{children}</h2>;
        case 'paragraph':
            return <p className={`lg:text-xl md:text-base text-sm  ${className}`}>{children}</p>;

        default:
            return <Heading type={1}>{children}</Heading>;
    }
};

export default Heading;
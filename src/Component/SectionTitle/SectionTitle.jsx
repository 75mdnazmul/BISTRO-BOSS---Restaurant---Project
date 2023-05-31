
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center mt-20 mb-16 w-4/12 text-slate-700">
            <i className=" text-yellow-600 text-lg">{subHeading}</i>
            <div className="w-full h-1 bg-slate-300 mt-3"></div>
            <h2 className="text-4xl py-2 font-bold text-slate-700">{heading}</h2>
            <div className="w-full bg-slate-300 h-1"></div>
        </div>
    );
};

export default SectionTitle;
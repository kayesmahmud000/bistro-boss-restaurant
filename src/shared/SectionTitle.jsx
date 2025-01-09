

const SectionTitle = ({title ,subtitle}) => {
    return (
        <div>
            <p className="text-[#D99904] border-b-2 w-fit mx-auto border-gray-400 py-3 text-center">---{subtitle}---</p>
            <h2 className="text-black text-2xl font-semibold w-fit mx-auto border-b-2 border-gray-400 py-3 text-center">{title}</h2>
            <div>
                
            </div>
        </div>
    );
};

export default SectionTitle;
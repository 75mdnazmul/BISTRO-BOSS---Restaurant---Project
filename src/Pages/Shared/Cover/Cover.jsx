
const Cover = ({img, title, description, textTransform, height}) => {
    return (
        <div style={{
            background: `url("${img}")`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height:` ${height}`
        }} className="mb-24 py-10" >
            <div className="text-white text-center bg-[rgba(21,21,21,0.6)] m-20 p-28  rounded-3xl">
                <h2 className="uppercase text-4xl font-bold mb-5">{title}</h2>
                <p className="text-xl" style={{textTransform:`${textTransform}`}}>{description}</p>
            </div>
        </div >
    );
};

export default Cover;
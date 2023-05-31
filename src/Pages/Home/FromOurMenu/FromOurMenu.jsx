import fromOurMenuImg from "../../../assets/home/featured.jpg"
import "./FromOurMenu.css"

const FromOurMenu = () => {
    return (
        <div className="mb-24 from-Our-Menu pt-1 pb-20">
            <div className="mx-auto text-center mt-20 mb-16 w-4/12 text-slate-700">
                <i className=" text-yellow-300 text-lg">---Check it out---</i>
                <div className="w-full h-1 bg-slate-100 mt-3"></div>
                <h2 className="text-4xl py-2 font-bold text-slate-100">FROM OUR MENU</h2>
                <div className="w-full bg-slate-100 h-1"></div>
            </div>
            <div className="md:flex justify-center items-center px-40">
                <div>
                    <img src={fromOurMenuImg} alt="From Our Menu Img" />
                </div>
                <div className="md:ml-10 space-y-3 text">
                    <p className="text-white text-lg">Aug 20, 2029</p>
                    <p className="text-white text-xl uppercase">Where can i get some ?</p>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn bg-transparent text-xl border-b-8 border-0 border-yellow-600 hover:bg-yellow-600 text-white  hover:border-0 uppercase">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FromOurMenu;


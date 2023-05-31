import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide4.jpg"
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const ChefRecommends = () => {
    return (
        <div className="mb-24">
            <SectionTitle
                heading={"CHEF RECOMMENDS"}
                subHeading={"---Should Try---"}
            ></SectionTitle>
            <div className="flex justify-between">
                <div className="card w-96 shadow-xl text-center bg-slate-100 ">
                    <figure><img className="w-[400px] h-[300px]" src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-3xl text-slate-900">Salads</h2>
                        <p className="mb-3 text-slate-800 text-xl">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions mx-auto">
                            <button className="btn bg-slate-300 text-yellow-600 text-xl border-b-8 border-0 hover:bg-slate-800 hover:border-0 border-yellow-600 uppercase">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl text-center bg-slate-100 ">
                    <figure><img className="w-[400px] h-[300px]" src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-3xl text-slate-900">Pizzas</h2>
                        <p className="mb-3 text-slate-800 text-xl">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions mx-auto">
                            <button className="btn bg-slate-300 text-yellow-600 text-xl border-b-8 border-0 hover:bg-slate-800 hover:border-0 border-yellow-600 uppercase">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl text-center bg-slate-100 ">
                    <figure><img className="w-[400px] h-[300px]" src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-3xl text-slate-900">Desserts</h2>
                        <p className="mb-3 text-slate-800 text-xl">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions mx-auto">
                            <button className="btn bg-slate-300 text-yellow-600 text-xl border-b-8 border-0 hover:bg-slate-800 hover:border-0 border-yellow-600 uppercase">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;
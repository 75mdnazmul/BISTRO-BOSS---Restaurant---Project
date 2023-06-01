import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";

const FromOurMenu = () => {
    const [menu ] = useMenu()
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div className="mb-24">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="mt-20 text-center">
                <button className="shadow-2xl btn bg-transparent text-yellow-600 text-xl border-b-8 hover:bg-slate-800 hover:border-0 border-yellow-600 uppercase">View Full  Menu</button>
            </div>            
        </div>
    );
};

export default FromOurMenu;
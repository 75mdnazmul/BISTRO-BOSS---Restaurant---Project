import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const OurMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === "popular");
            setMenu(popularItems)
        })
    }, [])
    return (
        <div className="mb-24">
            <SectionTitle
            heading={"FROM OUR MENU"}
            subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
        </div>
    );
};

export default OurMenu;
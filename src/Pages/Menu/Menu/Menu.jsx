import useTitleName from "../../../Hooks/useTitleName";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import FromOurMenu from "../../Home/FromOurMenu/FromOurMenu";

const Menu = () => {
    useTitleName('Our Menu Page')

    return (
        <div>
            <Cover
                img={menuImg}
                title={"Our Menu"}
                description={"Would you like to try a dish ?"}
                textTransform={'uppercase'}
                height={'600px'}
            ></Cover>
            <FromOurMenu></FromOurMenu>
        </div>
    );
};

export default Menu;
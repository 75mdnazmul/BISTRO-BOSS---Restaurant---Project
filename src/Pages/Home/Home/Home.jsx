import useTitleName from "../../../Hooks/useTitleName";
import Banner from "../Banner/Banner";
import OrderOnlineCategory from "../OrderOnlineCategory/OrderOnlineCategory";
import OurMenu from "../OurMenu/OurMenu";


const Home = () => {
    useTitleName('Home Page')
    return (
        <div>
            <Banner></Banner>
            <OrderOnlineCategory></OrderOnlineCategory>
            <OurMenu></OurMenu>
        </div>
    );
};

export default Home;
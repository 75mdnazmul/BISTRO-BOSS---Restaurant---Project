import useTitleName from "../../../Hooks/useTitleName";
import Banner from "../Banner/Banner";
import OrderOnlineCategory from "../OrderOnlineCategory/OrderOnlineCategory";


const Home = () => {
    useTitleName('Home Page')
    return (
        <div>
            <Banner></Banner>
            <OrderOnlineCategory></OrderOnlineCategory>
        </div>
    );
};

export default Home;
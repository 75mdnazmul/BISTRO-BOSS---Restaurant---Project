import useTitleName from "../../../Hooks/useTitleName";
import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import OrderOnlineCategory from "../OrderOnlineCategory/OrderOnlineCategory";
import OurMenu from "../OurMenu/OurMenu";


const Home = () => {
    useTitleName('Home Page')
    return (
        <div>
            <Banner></Banner>
            <OrderOnlineCategory></OrderOnlineCategory>
            <OurMenu></OurMenu>
            <ChefRecommends></ChefRecommends>
            <FromOurMenu></FromOurMenu>
        </div>
    );
};

export default Home;
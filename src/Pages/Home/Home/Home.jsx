import useTitleName from "../../../Hooks/useTitleName";
import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import OrderOnlineCategory from "../OrderOnlineCategory/OrderOnlineCategory";
import OurMenu from "../OurMenu/OurMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    useTitleName('Home Page')
    return (
        <div>
            <Banner></Banner>
            <OrderOnlineCategory></OrderOnlineCategory>
            <OurMenu></OurMenu>
            <ChefRecommends></ChefRecommends>
            <FromOurMenu></FromOurMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
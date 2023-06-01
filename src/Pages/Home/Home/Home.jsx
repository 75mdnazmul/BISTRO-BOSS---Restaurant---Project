import useTitleName from "../../../Hooks/useTitleName";
import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import OrderOnlineCategory from "../OrderOnlineCategory/OrderOnlineCategory";
import FeaturedManu from "../FeaturedManu/FeaturedManu";
import Testimonials from "../Testimonials/Testimonials";
import CallUs from "../CallUs/CallUs";


const Home = () => {
    useTitleName('Home Page')
    return (
        <div>
            <Banner></Banner>
            <OrderOnlineCategory></OrderOnlineCategory>
            <FromOurMenu></FromOurMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <FeaturedManu></FeaturedManu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
import useTitleName from "../../../Hooks/useTitleName";
import Banner from "../Banner/Banner";


const Home = () => {
    useTitleName('Home Page')
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;
import About from "./About/About";
import Carousel from "./Banner/Carousel";
import Services from "./Services/Services";
import Stats from "./Stats/Stats";



const Home = () => {
    return (
        <div className="space-y-[130px]">
            <Carousel />
            <Carousel />
            <Carousel />
            <About />
            <Services />
            <Stats />
        </div>
    );
};

export default Home;
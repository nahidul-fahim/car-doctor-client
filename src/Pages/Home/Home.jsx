import About from "./About/About";
import BannerCarousel from "./BannerCarousel";
import Services from "./Services/Services";
import Stats from "./Stats/Stats";



const Home = () => {
    return (
        <div className="space-y-[130px]">
            <BannerCarousel></BannerCarousel>
            <About />
            <Services />
            <Stats />
        </div>
    );
};

export default Home;
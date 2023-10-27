import About from "./About/About";
import BannerCarousel from "./BannerCarousel";
import Services from "./Services/Services";



const Home = () => {
    return (
        <div className="space-y-[130px]">
            <BannerCarousel></BannerCarousel>
            <About />
            <Services />
        </div>
    );
};

export default Home;
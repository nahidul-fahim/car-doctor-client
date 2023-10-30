import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
// import img4 from '../../../assets/images/banner/4.jpg';
// import img5 from '../../../assets/images/banner/5.jpg';
// import img6 from '../../../assets/images/banner/6.jpg';
// import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

import { register } from 'swiper/element/bundle';
register();

const Carousel = () => {
    return (
        <div className=''>
            <swiper-container
                slides-per-view="1"
                speed="1500"
                loop="true"
                navigation="true"
                autoplay="true"
                autoplay-delay="3000"
                effect="fade"
                modules="navigation"
            // navigation-nextEl=".swiper-button-next"
            // navigation-prevEl=".swiper-button-prev"
            // navigation-nextEl={<NextButton />}
            // navigation-prevEl={<PrevButton />}
            >
                <swiper-slide><img src={img1} alt="" /></swiper-slide>
                <swiper-slide><img src={img2} alt="" /></swiper-slide>
                <swiper-slide><img src={img3} alt="" /></swiper-slide>
            </swiper-container>

            {/* <div className='swiper-button-next'>
                <FaChevronCircleRight className='text-5xl text-red absolute bottom-0 right-0 z-50' />
            </div>
            <div className='swiper-button-prev]'>
                <FaChevronCircleLeft className='text-5xl text-red absolute bottom-0 right-14 z-50'/>
            </div> */}

        </div >
    );
};

export default Carousel;
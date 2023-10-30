import { useSwiper } from 'swiper/react';

const CarouselNav = () => {

    const swiper = useSwiper()


    return (
        <div className="swiper-nav-btns">
            <button className='text-white bg-main px-4 py-2' onClick={() => swiper.slidePrev()}>Prev</button>
            <button className='text-white bg-main px-4 py-2' onClick={() => swiper.slideNext()}>Next</button>
        </div>
    );
};

export default CarouselNav;
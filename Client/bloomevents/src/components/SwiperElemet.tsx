// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import dance from 'img/dance.jpg';
import man from 'img/man.jpg';
import landing from 'img/landing.jpg';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "styles/swiper.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function SwiperElemet() {
    return (
        <div className="h-[400px]">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide><img src={dance} alt="" /></SwiperSlide>
            <SwiperSlide><img src={man} alt="" /></SwiperSlide>
            <SwiperSlide><img src={landing} alt="" /></SwiperSlide>
          </Swiper>
        </div>
    );
}

export default SwiperElemet
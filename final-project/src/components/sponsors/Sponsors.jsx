import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import toshiba from '../../images/Rectangle 154.jpg';
import philips from '../../images/Rectangle 154(1).jpg';
import hp from '../../images/Rectangle 154(2).jpg';
import electro from '../../images/Rectangle 154(3).jpg';
import gorenje from '../../images/Rectangle 154(4).jpg';
import bosch from '../../images/Rectangle 154(5).jpg';
import acer from '../../images/Rectangle 154(6).jpg';
function Sponsors() {
  return (
    <div className="sponsors">
         <Swiper
        slidesPerView={6.9}
        spaceBetween={6}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="sponsor"><img src={toshiba} alt="" /></SwiperSlide>
        <SwiperSlide className="sponsor"><img src={philips} alt="" /></SwiperSlide>
        <SwiperSlide className="sponsor"><img src={hp} alt="" /></SwiperSlide>
        <SwiperSlide className="sponsor"><img src={electro} alt="" /></SwiperSlide>
        <SwiperSlide className="sponsor"><img src={gorenje} alt="" /></SwiperSlide>
        <SwiperSlide className="sponsor"><img src={bosch} alt="" /></SwiperSlide>
        <SwiperSlide className="sponsor"><img src={philips} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Sponsors
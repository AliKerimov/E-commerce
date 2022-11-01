// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style/swiper.css";
import phone from '../../images/image 1 (2).svg'
// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

function Hswiper() {
  return (
    <div className="swiper">
       <Swiper
        id="my-swiper"
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-pagination-color": "blue",
          // 'height':'76vh',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper cont"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className="bck">
          <div>
          <h3 className="title" data-swiper-parallax="-300">
            Buy & Sell <br /> What's Now & Next
          </h3>
          <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
          </div>
          </div>
          <div>
            <img src={phone} alt=""  className="phone-pic"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bck" >
          <div>
          <h3 className="title" data-swiper-parallax="-300">
            Buy & Sell <br /> What's Now & Next
          </h3>
          <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
          </div>
          </div>
          <div>
            <img src={phone} alt="" className="phone-pic"/>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="bck">
          <div>
          <h3 className="title" data-swiper-parallax="-300">
            Buy & Sell <br/> What's Now & Next
          </h3>
          <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
          </div>
          </div>
          <div>
            <img src={phone} alt="" className="phone-pic"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hswiper;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";

// assest
import brandImg_1 from "../../../../public/assest/Home/brand/1.svg";
import brandImg_2 from "../../../../public/assest/Home/brand/2.svg";
import brandImg_3 from "../../../../public/assest/Home/brand/3.svg";
import brandImg_4 from "../../../../public/assest/Home/brand/4.svg";
import brandImg_5 from "../../../../public/assest/Home/brand/5.svg";
import brandImg_6 from "../../../../public/assest/Home/brand/6.svg";
import brandImg_7 from "../../../../public/assest/Home/brand/7.svg";
import brandImg_8 from "../../../../public/assest/Home/brand/8.svg";
import brandImg_9 from "../../../../public/assest/Home/brand/9.svg";

function BrandSlider() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={25}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image src={brandImg_1} alt="brand image_1" width={150} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg_2} alt="brand image_2" width={150} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg_3} alt="brand image_3" width={150} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg_4} alt="brand image_4" width={150} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg_5} alt="brand image_5" width={150} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg_6} alt="brand image_6" width={150} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg_7} alt="brand image_7" width={150} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg_8} alt="brand image_8" width={150} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg_9} alt="brand image9" width={150} height={150} />
      </SwiperSlide>
    </Swiper>
  );
}

export default BrandSlider;

import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Banner_1 from "/public/assest/Shop/headerLogo_1.jpg";
import Banner_3 from "/public/assest/Shop/headerLogo_3.jpg";
// Import Swiper styles
import "swiper/css";
import SliderCss from "./Slider.module.css";
import { Autoplay } from "swiper";

export default function BanerSlider() {
  //   banner slider at header in shop page
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className={`mySwiper ${SliderCss.BanerSlider}`}
      >
        <SwiperSlide>
          <Image src={Banner_1} alt="banner image" width={1600} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Banner_3} alt="banner image" width={1600} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Cart from "../Cart/Cart";
import "swiper/css";
import "swiper/css/navigation";

function SliderProduct({ data }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        425: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className="justify-content-center d-flex ">
          <Cart data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderProduct;

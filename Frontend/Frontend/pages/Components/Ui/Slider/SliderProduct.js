import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Cart from "../Cart/Cart";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function SliderProduct({ data }) {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      }}
      modules={[Pagination]}
      className="mySwiper p-3"
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Cart data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderProduct;

import React from "react";
import styled from "styled-components";
import { withData } from "../assets/data/with";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function WithUs() {
  return (
    <Wrapper>
      <h2>우리와 함께 하세요</h2>
      <Swiper
        slidesPerView={6}
        slidesPerGroup={6}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {withData.map((item, idx) => {
          return (
            <SwiperSlide>
              <img src={item.logo} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 0 80px;
  .swiper {
    padding: 0 0 20px;
  }
  .swiper-pagination {
    text-align: right;
    bottom: 0px;
  }
`;
export default WithUs;

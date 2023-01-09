import React from "react";
import styled from "styled-components";
import { mainSlideData } from "../assets/data/mainSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MainSlide() {
  return (
    <Slide>
      <div className="wrapper">
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{ nextEl: ".next", prevEl: ".prev" }}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 3000 }}
            speed={500}
          >
            {mainSlideData.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="contents-box">
                    <div className="contents">
                      <span>{item.label}</span>
                      <h2>{item.title}</h2>
                      <p>{item.contents}</p>
                    </div>
                    <div className="img-box">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="prev nav">
              <i class="fa-solid fa-circle-chevron-left"></i>
            </div>
            <div className="next nav">
              <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
          </Swiper>
        </div>
      </div>
    </Slide>
  );
}

const Slide = styled.div`
  padding-top: 100px;
  .wrapper {
    padding: 10px 0;
    background-color: #baa5ff;
    height: 300px;
    box-sizing: border-box;
    margin-bottom: 200px;
  }
  .container {
    margin: 0 auto;
    width: 80%;
    position: relative;
    .contents-box {
      padding: 0px 100px;
      display: flex;
      margin-top: 30px;
      justify-content: space-between;
      .contents {
        color: #fff;
        margin-top: 10px;
        span {
          font-size: 15px;
          display: inline-block;
          border: 1px solid #fff;
          border-radius: 50px;
          padding: 5px 20px;
        }
        h2 {
          font-size: 40px;
        }
      }
      .img-box {
        img {
          height: 380px;
          width: 380px;
        }
      }
    }
    .swiper-pagination {
      display: flex;
      margin-left: 100px;
      &-bullet {
        width: 10px;
        height: 10px;
        background-color: rgba(1, 1, 1, 0.7);
        &-active {
          width: 40px;
          border-radius: 40px;
          transition: all 0.25s ease;
        }
      }
    }
    .nav {
      position: absolute;
      color: #fff;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      border-radius: 100%;
      box-shadow: 1px 1px 5px rgba(1, 1, 1, 0.7);
      i {
        font-size: 40px;
      }
      &.prev {
        left: 5px;
      }
      &.next {
        right: 5px;
      }
    }
  }
`;

export default MainSlide;

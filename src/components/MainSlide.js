import React from "react";
import styled from "styled-components";
import { mainSlideData } from "../assets/data/mainSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function MainSlide() {
  return (
    <Slide>
      <div className="wrapper">
        <div className="container">
          <Swiper>
            {mainSlideData.map((item, idx) => {
              return (
                <SwiperSlide>
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
    height: 250px;
    box-sizing: border-box;
  }
  .container {
    margin: 0 auto;
    width: 80%;
    .contents-box {
      padding: 0px 100px;
      display: flex;
      justify-content: space-between;
      .contents {
        color: #fff;
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
  }
`;

export default MainSlide;

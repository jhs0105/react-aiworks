import React, { useState } from "react";
import styled from "styled-components";
import { projectSlideData } from "../assets/data/projectSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Project() {
  const btns = [
    { name: "전체", done: false },
    { name: "포인트", done: false },
    { name: "봉사", done: false },
  ];
  const [active, setActive] = useState(btns);
  const handleClick = (e) => {
    const change = btns.map((item, idx) => {
      if (item.name === e.target.name) {
        item.done = !item.done;
      }
      return item;
    });
    setActive(change);
  };
  console.log(active);
  return (
    <Wrapper>
      <div className="txt">
        <h2>지금, 워키를 위한 프로젝트를 시작하세요</h2>
        <button className="more">
          <i className="fa-solid fa-plus"></i> 더보기
        </button>
      </div>

      <div className="keyword">
        {active.map((item, idx) => (
          <button
            name={item.name}
            onClick={handleClick}
            style={{ backgroundColor: !item.done ? "#f4f4f4" : "#e7dcff" }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="btns">
        <div className="proj-prev nav">
          <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div className="proj-next nav">
          <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 2000 }}
        navigation={{ nextEl: ".proj-next", prevEl: ".proj-prev" }}
      >
        {projectSlideData.map((item, idx) => {
          return (
            <SwiperSlide>
              <div className="img-box">
                <img src={item.image} alt="" />
                <span>{item.category}</span>
                <button>시작하기</button>
              </div>
              <div className="title">
                <h3>{item.title}</h3>
                <span>#{item.process}</span>
              </div>
              <div className="point">
                <h3>
                  {item.point}
                  <span>p</span>
                </h3>
                <span className="mostget">최대획득</span>
                <span className="per">{item.per}건당</span>
              </div>
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
  padding: 50px 0;
  box-sizing: border-box;
  position: relative;
  .txt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-weight: bold;
      font-size: 28px;
    }
    .more {
      font-size: 17px;
      font-weight: bold;
      padding: 0;
    }
  }

  .keyword {
    display: flex;
    margin: 50px 0 20px;
    button {
      background-color: #f4f4f4;
      margin-right: 10px;
      border-radius: 5px;
      padding: 5px 15px;
      font-size: 14px;
      &:nth-child(1):before {
        content: "📚";
        margin-right: 5px;
      }
      &:nth-child(2):before {
        content: "🎖";
        margin-right: 5px;
      }
      &:nth-child(3):before {
        content: "💘";
        margin-right: 5px;
      }
    }
  }
  .btns {
    display: flex;
    position: absolute;
    z-index: 2;
    right: 0;
    top: 150px;
    .nav {
      i {
        font-size: 30px;
        margin-left: 10px;
        color: #ccc;
      }
    }
  }
  .swiper {
    width: 100%;
    .img-box {
      position: relative;
      &:before {
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        position: absolute;
        visibility: hidden;
      }
      &:hover {
        &:before {
          visibility: visible;
        }
        button {
          visibility: visible;
        }
      }
      img {
        width: 100%;
        aspect-ratio: 1.5;
        object-fit: cover;
      }
      button {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
        z-index: 2;
        background-color: #8755f1;
        color: #fff;
        width: 80%;
        padding: 10px 0;
        border-radius: 10px;
        font-size: 20px;
        cursor: pointer;
        visibility: hidden;
      }
      span {
        position: absolute;
        left: 0;
        background-color: #111;
        color: #fff;
        padding: 5px 15px;
        font-size: 14px;
        border-radius: 5px;
      }
    }
    .title {
      border-bottom: 2px solid #ccc;
      padding-bottom: 10px;
      margin-bottom: 5px;
      h3 {
        font-size: 18px;
        margin: 5px 0;
      }
      span {
        display: block;
        color: #999;
        font-size: 14px;
      }
    }
    .point {
      display: flex;
      align-items: center;
      h3 {
        margin: 0;
        font-size: 24px;
        span {
          font-size: 18px;
        }
      }
      .mostget {
        background-color: #ffc0ba;
        color: #f91400;
        font-size: 12px;
        font-weight: bold;
        padding: 3px 10px;
        border-radius: 5px;
        display: block;
        margin: 0 5px;
      }
      .per {
        display: block;
        margin-left: auto;
        font-size: 15px;
        color: #999;
      }
    }
  }
`;
export default Project;

import React, { useState } from "react";
import styled from "styled-components";
import boxImage from "../images/boxImage.png";
import bottomImage from "../images/boxbottom.png";
import bigBox from "../images/bigBoxImage.png";
import { boxData } from "../assets/data/boxData";
import buttonImg from "../images/button.png";
import realStory from "../images/realStory.png";
import people01 from "../images/people01.png";
import people02 from "../images/people02.png";

function Box() {
  const [button, setButton] = useState(true);

  return (
    <Swiper>
      <div className="container">
        <div className="contents-box">
          <div className="contents">
            <h2>
              에이아이웍스의 워키가 되어, <br /> 당신의 인생을 바꿀 기회를
              만나보세요
            </h2>
            <p>aiworks와 함께 하면 혜택은 무엇이 있을까요?</p>
          </div>
          <div className="img-box" id="img-box">
            {button ? (
              <button
                onClick={() => {
                  document.getElementById("img-box").classList.add("on");
                  setButton(false);
                }}
              >
                <i class="fa-solid fa-circle-plus"></i>
              </button>
            ) : (
              <button
                onClick={() => {
                  document.getElementById("img-box").classList.remove("on");
                  setButton(true);
                }}
              >
                <i class="fa-solid fa-circle-xmark"></i>
              </button>
            )}
            <div className="outerbox" id="outerbox">
              <div className="sub-title">
                올해의 <strong>마스터워키!</strong>
              </div>
              <ul>
                {boxData.map((item, idx) => {
                  return (
                    <li>
                      <span className="name">
                        <i class="fa-solid fa-star"></i> {item.name}님
                      </span>
                      <span className="point">{item.point}p</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <p>
              지금 친구추천만 해도 <br />
              🥳 <strong>1000포인트</strong> 증정!
            </p>
            <img src={buttonImg} alt="" />
          </li>
          <li>
            <p>
              숨겨진 재능을 깨우는 <br />
              📖 <strong>데이터 클래스</strong> 듣기!
            </p>
            <img src={buttonImg} alt="" />
          </li>
          <li>
            <p>
              1365자원봉사 포털과
              <br />
              💝 <strong>따듯한 봉사활동</strong>을 함께!
            </p>
            <img src={buttonImg} alt="" />
          </li>
        </ul>
        <div className="real-story">
          <img src={realStory} alt="" />
          <div className="real-story-contents">
            <h3>
              우리와 함께 성장한 <br /> 워키들의 리얼 스토리
            </h3>
            <ul>
              <li>
                <img src={people01} alt="" />
                <p>
                  aiworks와 함께, Second Chance 시작 <br />
                  <span>매니저·조*현</span>
                </p>
              </li>
              <li>
                <img src={people02} alt="" />
                <p>
                  데이터 수집 체험을 통해 보게 된 새로운 시각
                  <br />
                  <span>데이터워커·유*은</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Swiper>
  );
}

const Swiper = styled.div`
  padding: 100px 0;
  background-color: #f4f7ff;
  .container {
    width: 80%;
    margin: 0 auto;
    .contents-box {
      display: flex;
      justify-content: space-between;
      position: relative;
    }
    .img-box {
      width: 670px;
      position: absolute;
      right: -17px;
      button {
        position: absolute;
        right: 50px;
        top: 60px;
        .fa-solid {
          font-size: 40px;
        }
      }
      &:before {
        content: "";
        background-image: url(${boxImage});
        width: 100%;
        height: 378px;
        left: 0px;
        top: 0;
        position: absolute;
        background-repeat: no-repeat;
      }
      &.on {
        &:before {
          background-image: url(${bigBox});
        }
        .outerbox {
          height: 504px;
          &:after {
            content: "";
            background-image: url(${bottomImage});
            height: 131px;
            width: 570px;
            position: absolute;
            bottom: 17px;
            left: 45px;
          }
        }
      }
      .outerbox {
        background-color: #e7ecf9;
        height: 120px;
        margin: 17px;
        display: flex;
        justify-content: space-evenly;
        overflow: hidden;
        .sub-title {
          margin-top: 50px;
        }
        ul {
          margin: 20px 0;
          li {
            background-color: #fff;
            padding: 6px 0;
            width: 350px;
            text-align: center;
            border-radius: 5px;
            margin-bottom: 10px;
            &:nth-child(1) {
              span {
                font-weight: bold;
                &.name {
                  i {
                    color: yellow;
                  }
                }
                &.point {
                  color: #8755f1;
                  font-size: 20px;
                }
              }
            }
            span {
              display: inline-block;
              &.name {
                font-size: 16px;
                width: 150px;
                text-align: left;
                i {
                  margin-right: 15px;
                  color: #e7ecf9;
                }
              }
              &.point {
                width: 150px;
              }
            }
          }
        }
      }
    }
    > ul {
      margin: 50px 0;
      display: flex;
      justify-content: space-between;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: 30px;
        width: calc(33.333% - 20px);
        box-sizing: border-box;
        border-radius: 5px;
        p {
          line-height: 1.5;
        }
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
    .real-story {
      display: flex;
      > img {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      }
      .real-story-contents {
        margin-left: 50px;
        h3 {
          font-size: 30px;
        }
        ul > li {
          display: flex;
          margin-bottom: 20px;
          img {
            width: 80px;
            height: 80px;
            margin-right: 30px;
          }
          p {
            line-height: 2;
            span {
              color: #999;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
`;
export default Box;

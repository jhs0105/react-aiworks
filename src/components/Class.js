import React from "react";
import styled from "styled-components";
import { classData } from "../assets/data/class";

function Class() {
  return (
    <Wrapper>
      <h2>당신의 잠재력을 다양한 클래스로 깨우세요!</h2>
      <div className="class-swiper">
        <ul>
          {classData.map((item, idx) => {
            return (
              <li>
                <div
                  className="img-box"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <span>{item.category}</span>
                  <div className="star">{item.star}</div>
                </div>
                <h3>{item.title}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 80px 0;
  ul {
    display: flex;
    justify-content: space-between;

    li {
      width: calc(33.333% - 20px);
    }
  }
  .img-box {
    width: 100%;
    height: 210px;
    background-size: cover;
    border-radius: 5px;
    position: relative;
    span {
      background-color: #111;
      color: #fff;
      font-size: 14px;
      padding: 5px 15px;
      display: inline-block;
      border-radius: 5px;
    }
    .star {
      position: absolute;
      bottom: 20px;
      left: 20px;
      font-size: 25px;
      color: #fff;
    }
  }
  h3 {
    font-size: 18px;
  }
`;
export default Class;

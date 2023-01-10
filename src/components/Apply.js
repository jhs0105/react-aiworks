import React from "react";
import styled from "styled-components";
import { applyData } from "../assets/data/apply";

function Apply() {
  return (
    <Swiper>
      <div className="title">
        <h2>망설임은 성공만 늦출뿐! 워키 모집에 지원해보세요</h2>
        <button className="more">
          <i className="fa-solid fa-plus"></i> 더보기
        </button>
      </div>
      <ul>
        {applyData.map((item, idx) => {
          return (
            <li>
              <div className="contents">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
              <div className="price">
                <h3>{item.point}</h3>
                {item.payMethod && <span>{item.payMethod}</span>}
              </div>
              <button>지원하기</button>
            </li>
          );
        })}
      </ul>
    </Swiper>
  );
}

const Swiper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 50px 0 100px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .more {
      font-size: 17px;
      font-weight: bold;
      padding: 0;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    li {
      background-color: #f4f7ff;
      width: calc(33.333% - 20px);
      padding: 20px;
      box-sizing: border-box;
      position: relative;
      > button {
        position: absolute;
        bottom: 20px;
        background-color: #fff;
        width: 70%;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 0;
        border-radius: 5px;
        font-size: 18px;
        visibility: hidden;
      }
      &:before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 5px;
        visibility: hidden;
      }
      &:hover {
        &:before {
          visibility: visible;
        }
        > button {
          visibility: visible;
        }
      }
      .contents {
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        padding-bottom: 20px;
        span {
          display: block;
          width: 90px;
          font-size: 15px;
          font-weight: bold;
          padding: 5px 0;
          text-align: center;
          border-radius: 5px;
          background-color: #c4cde3;
        }
        h3 {
          margin: 0;
          font-size: 18px;
          margin-top: 10px;
          line-height: 1.5;
          word-break: keep-all;
        }
      }
      .price {
        display: flex;
        h3 {
          margin: 0;
          display: flex;
          align-items: center;
          font-size: 20px;
          span {
            font-size: 14px;
          }
        }
        > span {
          display: flex;
          align-items: center;
          background-color: #ffc0ba;
          color: #f91400;
          font-size: 12px;
          border-radius: 5px;
          padding: 0 10px;
          margin-left: 5px;
        }
      }
    }
  }
`;

export default Apply;

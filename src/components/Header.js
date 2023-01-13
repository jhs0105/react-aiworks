import React from "react";
import Logo from "../images/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     document.getElementById("header").classList.add("color");
  //   });
  // }, []);
  return (
    <Headers id="header">
      <div className="container">
        <h1 className="logo">
          <img src={Logo} alt="" />
        </h1>
        <nav
          className="gnb"
          onMouseEnter={() => {
            document.getElementById("header").classList.add("on");
          }}
          onMouseLeave={() => {
            document.getElementById("header").classList.remove("on");
          }}
        >
          <ul className="list">
            <li>
              <Link to="/" className="depth01">
                참여하기
              </Link>
              <ul className="depth02">
                <li>바로참여</li>
                <li>모집지원</li>
              </ul>
            </li>
            <li>
              <Link to="/" className="depth01">
                데이터나눔
              </Link>
            </li>
            <li>
              <Link to="/" className="depth01">
                아카데미
              </Link>
            </li>
            <li>
              <Link to="/" className="depth01">
                이용하기
              </Link>
              <ul className="depth02">
                <li>이용안내</li>
                <li>공지사항</li>
                <li>이벤트</li>
                <li>자주하는 질문</li>
              </ul>
            </li>
            <li>
              <Link to="/" className="depth01">
                소개하기
              </Link>
              <ul className="depth02">
                <li>aiworks 소개</li>
                <li>우리이야기</li>
                <li>기업문의</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </Headers>
  );
}

const Headers = styled.header`
  width: 100%;
  position: fixed;
  height: 100px;
  overflow: hidden;
  z-index: 99;
  font-size: 17px;
  background-color: #fff;
  &.on {
    height: 300px;
    background-color: #fff;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  }

  .container {
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    h1 {
      height: 100px;
      display: flex;
      align-items: center;
    }
    nav {
      > ul {
        display: flex;
        .depth01 {
          width: 170px;
          height: 100px;
          //background-color: pink;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          &:hover {
            color: #8755f1;
          }
        }
        .depth02 {
          padding: 10px 0;
          font-size: 15px;
          cursor: pointer;
          li {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 0;
            &:hover {
              color: #8755f1;
            }
          }
        }
      }
    }
  }
`;

export default Header;

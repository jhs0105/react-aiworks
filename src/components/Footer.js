import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import icon01 from "../images/icon01.png";
import icon02 from "../images/icon02.png";
function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <div className="section">
          <ul>
            <li>회사소개</li>
            <li>이용약관</li>
            <li>
              <strong>개인정보처리방침</strong>
            </li>
            <li>데이터바우처 지원사업</li>
            <li>데이터 어노데이터 교육문의</li>
          </ul>
          <img src={logo} alt="" />
        </div>
        <div className="address-box">
          <div className="address">
            (주)테스트웍스 · 대표자명 윤석원 · 사업자번호 517-88-00087 <br />
            서울시 송파구 백제고분로 41길 42-19 (더블유123빌딩) 2~5층 <br />
            고객센터 070-4454-7370 · 이메일 help@testworks.co.kr <br />
            <span>
              (상담시간: 오후 1시30분 ~ 오후 5시30분 주말, 공휴일 제외)
            </span>
          </div>
          <div className="copyright">
            <img src={icon01} alt="" />
            <img src={icon02} alt="" />
            <p>COPYRIGHT 2019. TESTWORKS. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f4f4f4;
  color: #999;
  .container {
    margin: 0 auto;
    width: 80%;
    padding: 80px 0 50px;
    .section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        height: 30px;
      }
      ul {
        display: flex;
        font-size: 14px;
        li {
          margin-right: 30px;
        }
      }
    }
    .address-box {
      margin-top: 40px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      line-height: 1.6;
      .address {
        span {
          font-size: 12px;
        }
      }
      .copyright {
        text-align: right;
        img {
          margin-left: 10px;
          margin-bottom: 10px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
`;

export default Footer;

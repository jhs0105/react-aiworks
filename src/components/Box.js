import React from "react";
import styled from "styled-components";

function Box() {
  return (
    <Swiper>
      <div className="container">
        <h2>
          에이아이웍스의 워키가 되어, <br /> 당신의 인생을 바꿀 기회를
          만나보세요
        </h2>
        <p>aiworks와 함께 하면 혜택은 무엇이 있을까요?</p>
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
  }
`;
export default Box;

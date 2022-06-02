import styled from "styled-components";

const LoadingModalStyled = styled.header`
  * {
    margin: 0;
    padding: 0;
  }
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
  }

  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .spinnerBlock {
      animation: rotate 600ms linear 600ms infinite;
      transform-origin: center;
      display: block;
      height: 50px;
      width: 50px;
    }
    span {
      display: block;
      border: 2px solid #fff;
      border-radius: 50%;
      height: 100%;
      width: 100%;

      position: absolute;
      left: 0;
      top: 0;
      //transition: all 400ms linear 500ms;
      &:nth-child(1) {
        border-color: #eee;
      }
      &:nth-child(2) {
        left: -18px;
        top: 10px;
      }
      &:nth-child(3) {
        left: -18px;
        top: -10px;
      }
      &:nth-child(4) {
        left: 0;
        top: -18px;
      }
      &:nth-child(5) {
        left: 18px;
        top: -10px;
      }
      &:nth-child(6) {
        left: 18px;
        top: 10px;
      }
      &:nth-child(7) {
        left: 0;
        top: 18px;
      }
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingModalStyled;

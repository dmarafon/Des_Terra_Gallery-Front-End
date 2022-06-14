import styled from "styled-components";

const LoginFormStyled = styled.div`
  display: flex;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 920px) {
    flex-direction: column;
  }

  .login__image--container {
    display: flex;
    flex-direction: column;
    @media (max-width: 920px) {
      display: none;
    }
    margin-right: 10vw;
  }

  .login__image--image_container {
    display: flex;
    justify-content: flex-end;
  }
  .login__image {
    max-width: 30vw;
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 1.5s;
    -moz-animation: fadeIn 1.5s;
    -o-animation: fadeIn 1.5s;
    -ms-animation: fadeIn 1.5s;
  }

  .login__image {
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .login__image--text_container {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 920px) {
      display: none;
    }
  }
  .login__image--subtitle {
    font-size: 0.8vw;
  }

  .login__form--container {
    display: flex;
  }

  .login__container {
    display: flex;
    text-align: center;
    font-family: "Karla", sans-serif;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .login__text--intro {
    color: #000000;
    font-size: 150%;
    font-weight: 700;
    text-align: center;
    margin-left: 0.006%;
    margin-bottom: 0;
    font-weight: 800;
  }

  .login__text--intro_second {
    color: #000000;
    font-size: 150%;
    font-weight: 700;
    text-align: center;
    margin-left: 0.006%;
    margin: 0;
    font-weight: 800;
  }

  .login__text--register {
    color: #000000;
    font-size: 150%;
    font-weight: 700;
    text-align: center;
    margin-left: 0.006%;
    margin-top: 100px;
    cursor: pointer;
  }

  .login__register--navigation {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  .login__text--colored {
    color: #fa803b;
  }

  .login__form {
    font-size: 500%;
    font-weight: 700;
    text-align: center;
    margin-left: 0.006%;
    display: flex;
    padding: 30px;
    @media (min-width: 1218px) {
      width: 500px;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      width: 450px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      width: 400px;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      width: 350px;
    }
    @media (max-width: 480px) {
      width: 300px;
    }

    height: auto;
    overflow: hidden;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .login__label {
    text-align: left;
    font-size: 15px;
    color: #000000;
    cursor: pointer;
  }

  .login__label,
  .login__input {
    float: left;
    clear: both;
  }

  .login__input {
    font-size: 2.2vh;
    font-family: "Karla", sans-serif;
    margin: 15px 0;
    padding: 15px 10px;
    width: 100%;
    outline: none;
    border: 1px solid #000000;
    border-radius: 5px;
    display: inline-block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -ms-transition: 0.2s ease all;
    -o-transition: 0.2s ease all;
    transition: 0.2s ease all;
  }

  .login__input[type="text"]:focus,
  .login__input[type="password"]:focus {
    border-color: #000000;
  }

  .login__button--container {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .login__button {
    cursor: pointer;
    justify-content: center;
    height: 50px;
    width: 150px;
    background-color: #fac43b;
    color: #000000;
    border-radius: 5px;
    border-style: none;
    font-family: "Karla", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    font-size: 18px;
    opacity: 100%;
    max-width: 100%;
    padding: 11px 15px 10px;
    box-shadow: 5px 5px 10px -3px rgba(0, 0, 0, 0.199),
      -5px -5px 15px 3px rgba(255, 255, 255, 0.199);
    :hover {
      opacity: 100%;
    }
  }

  .login__button:hover {
    opacity: 0.8;
  }

  .login__button:active {
    opacity: 0.4;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login__modal--break_text {
    margin-bottom: 40px;
  }
`;

export default LoginFormStyled;

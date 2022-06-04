import styled from "styled-components";

const RegisterFormStyled = styled.div`
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

  .register__text--container {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-wrap: wrap;
    margin-left: 90px;
    margin-right: 70px;
  }

  .register__form--container-labels {
    display: flex;
    flex-direction: row;
    @media (max-width: 920px) {
      flex-direction: column;
    }
  }
  .register__form--container {
    display: flex;
  }

  .register__container {
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

  .register__text--intro {
    color: #000000;
    font-size: 30%;
    text-align: center;
    margin-left: 0.006%;
    margin-bottom: 0;
    margin-top: 20px;
    font-weight: 800;
  }
  .register__text--navigation {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  .register__text--login {
    color: #000000;
    font-size: 30%;
    font-weight: 400;
    text-align: center;
    margin-left: 0.006%;
    margin-top: 60px;
    cursor: pointer;
    font-weight: 700;
  }

  .register__text--colored {
    color: #fa803b;
  }

  .register__form {
    flex-direction: row;
    flex-wrap: nowrap;
    font-size: 500%;
    font-weight: 700;
    text-align: center;
    display: flex;
    padding: 30px;
    height: auto;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .register__form--first-labels {
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    @media (max-width: 920px) {
      margin-right: 0px;
    }
    flex-basis: 100%;
  }

  .register__form--second-labels {
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    @media (max-width: 920px) {
      margin-left: 0px;
    }
    flex-basis: 100%;
  }

  .register__label {
    text-align: left;
    font-size: 15px;
    color: #000000;
    cursor: pointer;
  }

  .register__label--checkbox {
    text-align: left;
    font-size: 18px;
    color: #000000;
    cursor: pointer;
    margin-left: 1px;
  }

  .register__input {
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

  .register__input--checkbox_click {
    width: 2vh;
    height: 2vh;
  }

  .register__input[type="text"]:focus,
  .register__input[type="password"]:focus {
    border-color: #000000;
  }

  .register__input--checkbox {
    display: flex;
  }

  .register__button--container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: flex-end;
    @media (max-width: 920px) {
      align-content: center;
    }
    margin-top: 40px;
  }

  .register__button {
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

  .register__button:hover {
    opacity: 0.8;
  }

  .register__button:active {
    opacity: 0.4;
  }
`;

export default RegisterFormStyled;

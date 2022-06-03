import styled from "styled-components";

const FooterStyled = styled.footer`
  font-family: "Karla", sans-serif;
  margin-top: 5vh;
  margin-bottom: 5vh;
  @media (max-width: 920px) {
    font-size: 20px;
    margin-bottom: 10vh;
    display: flex;
  }

  > * {
    flex: 1 100%;
  }

  .footer__container {
    display: flex;
    flex-flow: row wrap;
    margin-right: 10px;
    margin-left: 10px;
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 5vh;
    }
  }

  .footer__text--listitem {
    display: flex;
  }

  .footer__text--container {
    float: right;
  }

  .footer__address-list {
    flex: 100;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    zoom: 1;
  }

  .footer__social-media {
    display: flex;
  }
  .footer__social-media--facebook {
    margin-top: 43px;
    padding-right: 20px;
    height: 22px;
    margin-right: 10px;
    cursor: pointer;
    @media (max-width: 920px) {
      height: 45px;
      margin-right: 40px;
    }
  }

  .footer__social-media--twitter {
    margin-top: 43px;
    padding-right: 20px;
    height: 25px;
    cursor: pointer;
    @media (max-width: 920px) {
      height: 50px;
    }
  }

  .footer__social-media--instagram {
    margin-top: 43px;
    padding-right: 20px;
    height: 25px;
    margin-left: 7px;
    cursor: pointer;
    @media (max-width: 920px) {
      height: 50px;
      margin-left: 30px;
    }
  }
`;

export default FooterStyled;

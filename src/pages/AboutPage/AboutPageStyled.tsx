import styled from "styled-components";

const AboutPageStyled = styled.div`
  display: flex;
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 920px) {
    flex-direction: column;
  }

  .about__image--container {
    display: flex;
    flex-direction: column;
    @media (max-width: 1218px) {
      display: none;
    }
    margin-right: 10vw;
  }

  .about__image--image_container {
    display: flex;
    justify-content: flex-end;
  }
  .about__image {
    max-width: 21vw;
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 1.5s;
    -moz-animation: fadeIn 1.5s;
    -o-animation: fadeIn 1.5s;
    -ms-animation: fadeIn 1.5s;
  }

  .about__image {
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

  .about__image--text_container {
    display: flex;
    justify-content: flex-end;

    @media (max-width: 920px) {
      display: none;
    }
  }
  .about__image--subtitle {
    font-size: 0.8vw;
  }

  .about__container {
    text-align: left;
    font-family: "Karla", sans-serif;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    font-size: 15px;
    width: 45vw;
    margin-left: 5vw;
    margin-bottom: 6vh;
    @media (max-width: 920px) {
      margin-left: 0;
      width: 70vw;
    }
  }

  .about__text--second_text {
    margin-top: 10vh;
  }

  .about__text--first_text {
    margin-top: -2vh;
  }

  .about__text--intro {
    color: #000000;
    font-size: 170%;
    text-align: left;
    margin-left: 0.006%;
    margin-bottom: 0;
    font-weight: 800;
  }

  .about__text--paragraph {
    color: #000000;
    font-size: 150%;
    text-align: left;
    margin-left: 0.006%;
    margin-bottom: 0;
    font-weight: 400;
  }

  .about__text--art {
    color: #000000;
    font-size: 150%;
    font-weight: 800;
    text-align: center;
    margin-left: 0.006%;
    cursor: pointer;
    margin-top: 6vh;
  }

  .about__text--colored {
    color: #fa803b;
    font-weight: 800;
  }
`;

export default AboutPageStyled;

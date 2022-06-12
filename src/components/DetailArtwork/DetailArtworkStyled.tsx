import styled from "styled-components";

const DetailArtworkStyled = styled.div`
  display: flex;
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;

  ul {
    list-style: none;
    padding-left: 0;
  }

  a {
    text-decoration: none;
    color: #000000;
    font-weight: bold;
    font-size: 23px;
    margin-bottom: 30px;
  }

  .detail__container {
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
    margin-bottom: 6vh;
    margin-left: 3%;
    @media (max-width: 1500px) {
      margin-left: 0%;
      width: 70vw;
    }
  }

  .detail__heading--title {
    color: #fa803b;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 450%;
    @media (max-width: 751px) {
      font-size: 350%;
    }
  }

  .detail__paragraph--author {
    margin-top: -15px;
    font-weight: 400;
    font-size: 25px;
    margin-bottom: 40px;
  }

  .detail__paragraph--special {
    font-weight: 700;
    color: #fa803b;
    text-transform: uppercase;
    font-size: 90%;
  }

  .detail__paragraph--special_second {
    font-weight: 700;
    color: #fa803b;
    font-size: 90%;
  }

  .detail__paragraph--description {
    font-weight: 100;
    font-size: 190%;
    margin-bottom: 40px;
    padding-right: 200px;
    @media (max-width: 1500px) {
      padding-right: 0px;
      font-size: 150%;
    }
  }

  .detail__list {
    font-weight: 400;
    font-size: 23px;
    margin-bottom: 25px;
    text-transform: capitalize;
  }

  .detail__image--container {
    display: flex;
    padding: 0 1.2em 1.2em;
    display: flex;
    flex-direction: column;
    margin-right: 5vw;
    @media (max-width: 1149px) {
      margin-right: 0vw;
    }
  }

  .detail__image--container_second {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 1149px) {
      justify-content: center;
    }
  }

  .detail__image {
    width: 641.25px;
    height: 697.5px;

    @media (min-width: 1341px) and (max-width: 1445px) {
      width: 591.25px;
      height: 647px;
    }

    @media (min-width: 1255px) and (max-width: 1340px) {
      width: 551.25px;
      height: 607px;
    }
    @media (min-width: 1150px) and (max-width: 1254px) {
      width: 501.25px;
      height: 557px;
    }

    @media (min-width: 451px) and (max-width: 1149px) {
      width: 401.25px;
      height: 457px;
      justify-content: center;
    }

    @media (min-width: 451px) and (max-width: 531px) {
      width: 367.44px;
      height: 415px;
    }

    @media (min-width: 400px) and (max-width: 450px) {
      width: 317.44px;
      height: 365px;
    }

    @media (min-width: 376px) and (max-width: 399px) {
      width: 292.44px;
      height: 340px;
    }

    @media (max-width: 375px) {
      width: 252.44px;
      height: 300px;
    }
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 40px;
    object-fit: cover;
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 1.5s;
    -moz-animation: fadeIn 1.5s;
    -o-animation: fadeIn 1.5s;
    -ms-animation: fadeIn 1.5s;
  }

  .detail__image {
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

  .detail__info--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 50px;
  }

  .detail__button--container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-decoration: none;
    margin-top: 50px;
    @media (max-width: 1500px) {
      align-items: center;
    }
  }

  .detail__register--navigation {
    font-weight: 400;
    font-size: 23px;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
  }

  .details__text--colored {
    font-weight: 400;
    font-size: 23px;
    cursor: pointer;
    color: #fa803b;
    font-weight: bold;
  }
`;

export default DetailArtworkStyled;

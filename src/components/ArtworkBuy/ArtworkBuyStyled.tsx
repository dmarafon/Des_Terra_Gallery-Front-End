import styled from "styled-components";

const ArtworkBuyStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px;
  flex-direction: column;

  .artwork_buy__text--title {
    font-size: 1px;
  }

  .artwork__list {
    display: flex;
  }

  .artwork__list--info {
    display: flex;
    margin-top: 80px;
    @media (max-width: 1150px) {
      flex-direction: column;
    }
  }

  .artwork__input {
    width: 70px;
    height: 30px;
    border: 1px solid black;
  }

  .artwork__input[type="number"] {
    font-size: 20px;
  }

  .artwork__container {
    position: relative;
    width: 345;
    text-align: center;
    margin-right: 100px;
    @media (max-width: 1150px) {
      margin-right: 0px;
    }
  }

  .artwork__rent--container {
    display: flex;
    flex-direction: column;
    margin-right: 100px;
    justify-content: space-between;
    @media (max-width: 1150px) {
      margin-right: 0px;
      margin-top: 120px;
    }
  }

  .artwork__purchase--container {
    display: flex;
    flex-direction: column;
    margin-right: 100px;
    justify-content: space-between;
    @media (max-width: 1150px) {
      margin-right: 0px;
      margin-top: 150px;
      margin-bottom: 70px;
    }
  }

  .artwork_buy__button {
    text-decoration: none;
    height: 55px;
    cursor: pointer;
    justify-content: center;
    height: 50px;
    width: 150px;
    background-color: #fa803b;
    color: #ffffff;
    border-radius: 5px;
    border-style: none;
    font-family: "Karla", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    font-size: 15px;
    opacity: 100%;
    max-width: 100%;
    padding: 11px 15px 10px;
    box-shadow: 5px 5px 10px -3px rgba(0, 0, 0, 0.199),
      -5px -5px 15px 3px rgba(255, 255, 255, 0.199);
    :hover {
      opacity: 100%;
    }
    :hover {
      opacity: 0.8;
    }

    :active {
      opacity: 0.4;
    }
  }

  .artwork__image {
    width: 417.44px;
    height: 465px;

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
    cursor: pointer;
  }

  .artwork__text {
    flex: 100;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    margin-top: 10px;
    margin-left: 15px;
  }

  .artworkbuy__text {
    font-weight: 400;
    font-size: 120%;
  }

  .artworkbuy__text--important {
    font-weight: 700;
    font-size: 135%;
  }

  .artworkbuy__text--important_total {
    font-weight: 800;
    font-size: 150%;
  }

  .artwork__buy--color {
    color: #fa803b;
  }

  .artwork__text--author {
    font-weight: lighter;
    font-size: 120%;
  }

  .artwork__text--title {
    margin-top: -5px;
    font-size: 150%;
    font-weight: 700;
  }

  .artwork__text--price {
    margin-top: -10px;
    font-size: 120%;
  }

  .artwork__text--container {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 40vw;
    margin-right: 40vw;
    font-size: 150%;
    font-weight: 700;
    text-align: center;
    align-content: center;

    @media (min-width: 835px) and (max-width: 1023px) {
      margin-left: 37vw;
      margin-right: 37vw;
    }

    @media (min-width: 683px) and (max-width: 834px) {
      margin-left: 35vw;
      margin-right: 35vw;
    }

    @media (min-width: 603px) and (max-width: 682px) {
      margin-left: 33vw;
      margin-right: 33vw;
    }

    @media (min-width: 568px) and (max-width: 602px) {
      margin-left: 32vw;
      margin-right: 32vw;
    }

    @media (min-width: 513px) and (max-width: 567px) {
      margin-left: 30vw;
      margin-right: 30vw;
    }

    @media (min-width: 465px) and (max-width: 512px) {
      margin-left: 28vw;
      margin-right: 28vw;
    }

    @media (max-width: 464px) {
      margin-left: 25vw;
      margin-right: 25vw;
    }
  }

  .general__button--orange {
    margin-left: 79vw;
    margin-top: 45px;

    @media (min-width: 1712px) and (max-width: 1860px) {
      margin-left: 81vw;
    }
    @media (min-width: 1651px) and (max-width: 1711px) {
      margin-left: 82vw;
    }

    @media (min-width: 1555px) and (max-width: 1650px) {
      margin-left: 84vw;
    }

    @media (min-width: 1493px) and (max-width: 1554px) {
      margin-left: 85vw;
    }

    @media (min-width: 1392px) and (max-width: 1492px) {
      margin-left: 70vw;
    }

    @media (min-width: 1354px) and (max-width: 1393px) {
      margin-left: 71vw;
    }

    @media (min-width: 1289px) and (max-width: 1353px) {
      margin-left: 72vw;
    }

    @media (min-width: 1210px) and (max-width: 1289px) {
      margin-left: 73vw;
    }

    @media (min-width: 1150px) and (max-width: 1209px) {
      margin-left: 74vw;
    }

    @media (min-width: 1110px) and (max-width: 1149px) {
      margin-left: 75vw;
    }

    @media (min-width: 1055px) and (max-width: 1109px) {
      margin-left: 76vw;
    }

    @media (min-width: 1023px) and (max-width: 1054px) {
      margin-left: 77vw;
    }

    @media (max-width: 1022px) {
      margin: auto;
      display: block;
    }
  }

  .artwork__text--intro {
    color: #000000;
    font-size: 100%;
    text-align: center;
    margin-left: 0.006%;
    margin-bottom: 0;
    margin-top: 20px;
    font-weight: 800;
  }

  .artwork__text--colored {
    color: #fa803b;
  }
`;
export default ArtworkBuyStyled;

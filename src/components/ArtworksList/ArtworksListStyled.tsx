import styled from "styled-components";

const ArtworksListStyled = styled.div`
  .artworks__list {
    list-style: none;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-inline-start: 0;
  }

  .artworks__navigate--container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-inline-start: 0;
  }

  .artwork__filter--container {
    display: flex;
    margin-top: 50px;
    justify-content: center;
  }

  .artworks__navigate--button_first {
    filter: invert(61%) sepia(10%) saturate(5710%) hue-rotate(335deg)
      brightness(102%) contrast(96%);
    cursor: pointer;
    width: 10vh;
    margin-right: 100px;
    @media (max-width: 995px) {
      position: fixed;
      left: 5%;
      bottom: 40%;
      z-index: 1000;
      width: 8vh;
    }
  }

  .artworks__navigate--button_deactivated_left {
    filter: invert(100%) sepia(0%) saturate(7452%) hue-rotate(15deg)
      brightness(134%) contrast(100%);
    width: 10vh;
    margin-right: 100px;
    cursor: default;
    @media (max-width: 995px) {
      position: fixed;
      left: 5%;
      bottom: 40%;
      z-index: 1000;
      width: 8vh;
    }
  }

  .artworks__navigate--button_deactivated_right {
    filter: invert(100%) sepia(0%) saturate(7452%) hue-rotate(15deg)
      brightness(134%) contrast(100%);
    width: 10vh;
    margin-right: 100px;
    @media (max-width: 995px) {
      position: fixed;
      right: 5%;
      bottom: 40%;
      z-index: 1000;
      width: 8vh;
    }
  }

  .artworks__navigate--button_second {
    filter: invert(61%) sepia(10%) saturate(5710%) hue-rotate(335deg)
      brightness(102%) contrast(96%);
    cursor: pointer;
    width: 10vh;
    margin-left: 100px;
    @media (max-width: 995px) {
      position: fixed;
      right: 5%;
      bottom: 40%;
      z-index: 1000;
      width: 8vh;
    }
  }

  .artworks__navigate--counter {
    color: #ff701e;
    font-weight: bolder;
    font-size: 200%;
    font-family: "Karla", sans-serif;
    cursor: default;
  }

  .dropdown__container {
    display: flex;
    margin-right: 10%;
  }

  .dropdown__container--center {
    display: flex;
    justify-content: center;
    margin-right: 0;
  }

  .dropdown__container--right {
    display: flex;
    justify-content: center;
    margin-right: 0;
    margin-left: 10%;
    @media (max-width: 1492px) {
      display: none;
    }
  }

  .dropdown__container--right_responsive {
    display: flex;
    margin-right: 300px;
    margin-top: 50px;
    margin-left: 0;
    margin-right: 0;
    justify-content: center;
    @media (min-width: 1492px) {
      display: none;
    }
  }

  .dropbtn {
    background-color: #fac43b;
    color: black;
    border: 1px solid black;
    font-weight: bolder;
    border-radius: 5px;
    padding: 12px;
    font-family: "Karla", sans-serif;
    font-size: 16px;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #ffff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #ffd15c;
    color: black;
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
export default ArtworksListStyled;

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
`;
export default ArtworksListStyled;

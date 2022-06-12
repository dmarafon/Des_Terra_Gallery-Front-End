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
    width: 10vh;
    margin-right: 100px;
    cursor: default;
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
    color: #fa803b;
    font-weight: bolder;
    font-size: 200%;
    cursor: default;
  }
`;
export default ArtworksListStyled;

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
    cursor: pointer;
  }
  .artworks__navigate--button {
    filter: invert(61%) sepia(10%) saturate(5710%) hue-rotate(335deg)
      brightness(102%) contrast(96%);

    width: 90px;
  }
`;
export default ArtworksListStyled;

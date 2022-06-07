import styled from "styled-components";

const MyArtworksListStyled = styled.div`
  .artwork__container {
    display: flex;
    flex-direction: column;
  }

  .artworks__list {
    list-style: none;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-inline-start: 0;
  }

  .artwork__text--container {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-wrap: wrap;
    margin-left: 40vw;
    margin-right: 40vw;
    font-size: 150%;
    font-weight: 700;
    text-align: center;

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
export default MyArtworksListStyled;

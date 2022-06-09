import styled from "styled-components";

const MyArtworksListStyled = styled.div`
  a {
    text-decoration: none;
  }

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
export default MyArtworksListStyled;

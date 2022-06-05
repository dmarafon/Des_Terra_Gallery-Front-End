import styled from "styled-components";

const HomePageStyled = styled.div`
  .home__image--crop {
    overflow: hidden;
    width: 100%;
  }

  .home__image--container {
    left: -200vw;
    position: relative;
    text-align: center;
    width: 500vw;
  }

  .home__text--container {
    position: relative;
  }

  .home__text--container > h2 {
    color: white;
    position: absolute;
    text-align: left;
    left: 150px;
    @media (max-width: 1900px) {
      left: 15px;
    }
    z-index: 1;
    top: 110%;
    font-weight: 700;
    font-size: 30px;
  }

  .home__text--container > h3 {
    color: white;
    position: absolute;
    left: 145px;
    @media (max-width: 1900px) {
      left: 15px;
    }

    z-index: 1;
    top: 35px;
    font-weight: 800;
    font-size: 45px;
  }

  .home__text--container > p {
    color: white;
    position: absolute;
    left: 145px;
    @media (max-width: 1900px) {
      left: 15px;
    }

    z-index: 1;
    top: 100px;
    @media (max-width: 433px) {
      top: 150px;
    }
    font-weight: 800;
    font-size: 45px;
  }

  .home__image--first {
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 1.5s;
    -moz-animation: fadeIn 1.5s;
    -o-animation: fadeIn 1.5s;
    -ms-animation: fadeIn 1.5s;
  }

  .home__image--first {
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
`;

export default HomePageStyled;

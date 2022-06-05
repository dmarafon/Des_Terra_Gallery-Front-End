import styled from "styled-components";

const HomePageStyled = styled.div`
  @media (max-width: 920px) {
  }

  .home__image--first {
    margin: 0 auto;
    display: block;
    width: 99vw;
    height: auto;
  }

  .home__image--first {
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 1.5s;
    -moz-animation: fadeIn 1.5s;
    -o-animation: fadeIn 1.5s;
    -ms-animation: fadeIn 1.5s;
  }

  .home__image--container {
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

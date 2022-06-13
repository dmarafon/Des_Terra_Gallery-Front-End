import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .not-found__title {
    color: #fa803b;
    font-weight: 800;
    font-size: 700%;
    @media (max-width: 1055px) {
      font-size: 650%;
    }
  }

  .not-found__text--line-first {
    margin-top: -3%;
    @media (max-width: 1055px) {
      margin-top: -5%;
      font-size: 400%;
    }
    color: black;
    font-weight: 800;
    font-size: 500%;
  }

  .not-found__text--line-second {
    margin-top: -3%;
    @media (max-width: 1055px) {
      margin-top: -5%;
      font-size: 400%;
    }
    color: black;
    font-weight: 800;
    font-size: 500%;
  }
`;

export default NotFoundPageStyled;

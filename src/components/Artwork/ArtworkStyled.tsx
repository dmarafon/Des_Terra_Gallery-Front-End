import styled from "styled-components";

const ArtworkStyled = styled.div`
  .artwork__list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2%;
  }

  .artwork__container {
    position: relative;
    margin: 20px;
    padding: 20px;
    width: 345;
    text-align: center;
  }

  .artwork__image {
    width: 417.44px;
    height: 465px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 40px;
    padding: 20px;
    object-fit: cover;
    cursor: pointer;
  }
`;
export default ArtworkStyled;

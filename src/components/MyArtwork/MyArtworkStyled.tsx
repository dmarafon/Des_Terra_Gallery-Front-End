import styled from "styled-components";

const MyArtworkStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;

  .artwork__container {
    position: relative;
    margin: 20px;
    width: 345;
    text-align: center;
  }

  .artwork__image {
    width: 417.44px;
    height: 465px;
    object-fit: cover;

    @media (min-width: 451px) and (max-width: 531px) {
      width: 367.44px;
      height: 415px;
    }

    @media (min-width: 400px) and (max-width: 450px) {
      width: 317.44px;
      height: 365px;
    }

    @media (min-width: 376px) and (max-width: 399px) {
      width: 292.44px;
      height: 340px;
    }

    @media (max-width: 375px) {
      width: 252.44px;
      height: 300px;
    }

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 40px;
    object-fit: cover;
    cursor: pointer;
  }

  .artwork__text {
    flex: 100;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    margin-top: 10px;
    margin-left: 15px;
  }

  .artwork__text--author {
    font-weight: lighter;
    font-size: 120%;
  }

  .artwork__text--title {
    margin-top: -5px;
    font-size: 150%;
  }

  .artwork__text--price {
    margin-top: -10px;
    font-size: 120%;
  }

  .artwork__icons--container {
    display: flex;
    position: absolute;
    justify-content: space-around;
    width: 421.44px;
    top: 6%;
    text-align: center;
  }

  .artwork__icons--first {
    width: 50px;
    overflow: visible;
    box-sizing: content-box;
    margin-right: 150px;
    cursor: pointer;
  }

  .artwork__icons--second {
    width: 50px;
    overflow: visible;
    box-sizing: content-box;
    cursor: pointer;
  }

  .artwork__icons--first:hover {
    transform: scale(1.2);
  }

  .artwork__icons--second:hover {
    transform: scale(1.2);
  }
`;
export default MyArtworkStyled;

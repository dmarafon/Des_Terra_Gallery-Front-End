import styled from "styled-components";

const ModalTextStyled = styled.div`
  .modal {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    z-index: 999;
  }

  .modal-content {
    height: 30vh;
    @media (max-width: 387px) {
      height: 28vh;
    }
    background-color: #fa803b;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 40px;
    padding-right: 40px;
    font-family: "Karla", sans-serif;
    font-size: 3vh;
    @media (max-width: 387px) {
      font-size: 2.5vh;
    }
    border-radius: 5%;
  }
  .modal-button {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }

  .modal-button--closed {
    margin-left: auto;
    margin-bottom: 15px;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 5vh;
    @media (max-width: 387px) {
      font-size: 4vh;
    }
    text-decoration: none;
    color: white;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
  }
`;

export default ModalTextStyled;

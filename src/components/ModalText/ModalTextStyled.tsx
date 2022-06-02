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
    padding: 40px 20px 20px;
  }

  .modal-content {
    width: 20%;
    height: 10%;
    background-color: #050506;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 3%;
    padding-right: 3%;
    font-size: 100%;
    border-radius: 5%;
  }

  .modal-button--closed {
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
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

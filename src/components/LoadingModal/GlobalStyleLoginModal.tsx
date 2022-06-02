import { createGlobalStyle } from "styled-components";

const GlobalStyleLoginModal = createGlobalStyle<{ yellowColor: boolean }>`
  :root {
    background-color: ${(props) => (props.yellowColor ? "#FAC43B" : "white")}
    
  }
`;

export default GlobalStyleLoginModal;

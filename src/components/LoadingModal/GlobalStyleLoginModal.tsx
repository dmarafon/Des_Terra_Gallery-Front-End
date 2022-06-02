import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ yellowColor: boolean }>`
  :root {
    background-color: ${(props) => (props.yellowColor ? "#FAC43B" : "white")}
    
  }
`;

export default GlobalStyle;

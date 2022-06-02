import LoadingModalStyled from "./LoadingModalStyled";
import { createGlobalStyle } from "styled-components";
import { useRef } from "react";
import ReactPortal from "../ReactPortalDom/ReactPortal";

const GlobalStyle = createGlobalStyle<{ yellowColor: boolean }>`
  body {
    background-color: ${(props) => (props.yellowColor ? "#FAC43B" : "white")};
  }
`;

const LoadingModal = ({
  children,
}: // handleClose,
{
  children?: any;
}): JSX.Element => {
  const nodeRef = useRef(null);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <LoadingModalStyled>
        <GlobalStyle yellowColor />
        <div className="container" ref={nodeRef}>
          <div className="loader">
            {children}
            <div className="spinnerBlock">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <GlobalStyle yellowColor />
      </LoadingModalStyled>
    </ReactPortal>
  );
};

export default LoadingModal;

import LoadingModalStyled from "./LoadingModalStyled";
import { useRef } from "react";
import ReactPortal from "../ReactPortalDom/ReactPortal";
import GlobalStyle from "./GlobalStyleLoginModal";

const LoadingModal = (): JSX.Element => {
  const nodeRef = useRef(null);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <LoadingModalStyled>
        <GlobalStyle yellowColor />
        <div className="container" ref={nodeRef} data-testid="modal">
          <div className="overlay">
            <div className="loader">
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
        </div>
        <GlobalStyle yellowColor />
      </LoadingModalStyled>
    </ReactPortal>
  );
};

export default LoadingModal;

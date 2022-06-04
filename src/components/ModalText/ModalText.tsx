import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import ReactPortal from "../ReactPortalDom/ReactPortal";
import ModalTextStyled from "./ModalTextStyled";

const ModalText = ({
  children,
  handleClose,
  isOpen,
  customFunction,
}: {
  children: any;
  handleClose: any;
  isOpen: boolean;
  customFunction: any;
}): JSX.Element => {
  const nodeRef = useRef(null);
  const dispatch = useAppDispatch();
  const apiMessage = useAppSelector((state) => state.ui.apiResponse);

  const buttonOnClick = () => {
    if (customFunction && apiMessage !== "Blank") {
      dispatch(customFunction);
      sessionStorage.clear();
    }
    handleClose();
  };

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <ModalTextStyled>
        <div className="modal" ref={nodeRef}>
          <div className="modal-content">
            <div className="modal-button">
              <button onClick={buttonOnClick} className="modal-button--closed">
                &times;
              </button>
              {children}
            </div>
          </div>
        </div>
      </ModalTextStyled>
    </ReactPortal>
  );
};

export default ModalText;

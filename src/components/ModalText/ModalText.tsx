import { useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const apiMessage = useAppSelector((state) => state.ui.apiResponse);

  const buttonOnClick = async () => {
    if (customFunction && apiMessage !== "Blank") {
      await dispatch(customFunction);
      navigate("/home");
    }
    sessionStorage.clear();
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

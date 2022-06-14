import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();

  const buttonOnClick = async () => {
    if (customFunction && apiMessage === "new") {
      await dispatch(customFunction);
      navigate("/home");
    }

    if (!customFunction && apiMessage === "new") {
      navigate("/myart");
    }

    if (!customFunction && apiMessage === "upd") {
      navigate("/myart");
    }

    if (
      !customFunction &&
      location.pathname === "/artwork/1" &&
      apiMessage === "Unknown Error"
    ) {
      navigate("/home");
    } else if (
      !customFunction &&
      location.pathname.startsWith("/artwork") === true &&
      apiMessage === "Unknown Error"
    ) {
      navigate("/artwork/1");
    } else if (!customFunction && apiMessage === "Unknown Error") {
      navigate("/myart");
    }

    if (!customFunction && apiMessage === "Bad Request") {
      navigate("/myart");
    }
    sessionStorage.clear();
    handleClose();
  };

  return (
    <ReactPortal
      wrapperId="react-portal-modal-container"
      data-testid="modal-test"
    >
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

import { useRef } from "react";
import ReactPortal from "../ReactPortalDom/ReactPortal";
import ModalTextStyled from "./ModalTextStyled";

const ModalText = ({
  children,
  handleClose,
}: {
  children: any;
  handleClose: any;
}): JSX.Element => {
  const nodeRef = useRef(null);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <ModalTextStyled>
        <div className="modal" ref={nodeRef}>
          <div className="modal-content">
            {children}
            <button onClick={handleClose} className="modal-button--closed">
              &times;
            </button>
          </div>
        </div>
      </ModalTextStyled>
    </ReactPortal>
  );
};

export default ModalText;

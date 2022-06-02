import { useRef } from "react";
import ReactPortal from "../ReactPortalDom/ReactPortal";
import ModalTextStyled from "./ModalTextStyled";

const ModalText = ({
  children,
  handleClose,
  isOpen,
}: {
  children: any;
  handleClose: any;
  isOpen: boolean;
}): JSX.Element => {
  const nodeRef = useRef(null);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <ModalTextStyled>
        <div className="modal" ref={nodeRef}>
          <div className="modal-content">
            <div className="modal-button">
              <button onClick={handleClose} className="modal-button--closed">
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

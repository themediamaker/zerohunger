// import I18NextContext from "@/Helper/I18NextContext";
// import { useTranslation } from "@/app/i18n/client";
import { useContext, useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
// import 'reactstrap/dist/reactstrap.min.css'; 

const ShowModal = ({ open = false, buttons, title, close = true, modalAttr, setModal, ...props }) => {
  const [isOpen, setIsOpen] = useState(open);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  return (
    <Modal id="staticBackdrop" isOpen={isOpen} centered className={`theme-modal theme-form ${modalAttr?.className}`} toggle={() => {
      setIsOpen(false); setModal && setModal(false);
    }}>
      {close && (
        <ModalHeader
          toggle={() => {
            setIsOpen(false); setModal && setModal(false);
          }}>
          {title && (title === "success" ? "success" : title === "fail" ? "Oops!" : title)}
        </ModalHeader>
      )}
      {!close && title && <ModalHeader>{title === "success" ? "success" : title === "fail" ? "Oops!" : title}</ModalHeader>}
      <ModalBody>{props.children}</ModalBody>
      {(buttons) && (
        <ModalFooter>
          <div className="button-box">{buttons}</div>
        </ModalFooter>
      )}
    </Modal>
  );
};

export default ShowModal;

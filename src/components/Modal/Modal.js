import Portal from "../../Potal";
import SecondaryButton from "../Button/SecondaryButton";
import styled from "styled-components";

const Modal = ({ children, closeModal }) => {
  return (
    <Portal>
      <ModalOverlay>
        <ModalBody>
          <ModalContent>{children}</ModalContent>
          <SecondaryButton onClick={closeModal} text="Close" />
        </ModalBody>
      </ModalOverlay>
    </Portal>
  );
};

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  zindex: 1000;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: fixed;
  width: 50%;
  height: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10rem;
  border: 2px solid #50aa63;
  border-radius: 20px;
`;

const ModalContent = styled.div`
  display: block;
  padding: 3% 0 0 0;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Modal;

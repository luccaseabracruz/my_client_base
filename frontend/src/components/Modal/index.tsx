import React from "react";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalContainer } from "./style";

interface IModalProps {
  toggleModal: () => void;
  children: ReactNode;
  blockClosing?: boolean;
}

export const Modal = ({ children, toggleModal, blockClosing }: IModalProps) => {
  const ref: any = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [toggleModal]);

  return createPortal(
    <ModalContainer>
      <div ref={blockClosing ? null : ref} className="modalBox">
        {children}
      </div>
    </ModalContainer>,
    document.body
  );
};

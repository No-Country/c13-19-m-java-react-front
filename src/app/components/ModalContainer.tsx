// Modal.tsx
import { useState, ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";

  return (
    <div className={modalClasses}>
      <div className="fixed inset-0 backdrop-blur-md backdrop-filter bg-opacity-70 flex items-center justify-center">
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full md:w-auto max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              X
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

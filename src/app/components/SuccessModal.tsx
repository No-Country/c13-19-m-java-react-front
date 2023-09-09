// SuccessModal.js
import React from "react";
import Modal from "react-modal";
import { FaCheckCircle } from "react-icons/fa";

Modal.setAppElement("#root"); // Establece el elemento raíz de tu aplicación

const SuccessModal = ({ isOpen, onClose }: any) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Registro Exitoso"
    >
      <div className="text-center">
        <FaCheckCircle size={50} color="green" />
        <p>El registro fue exitoso</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </Modal>
  );
};

export default SuccessModal;

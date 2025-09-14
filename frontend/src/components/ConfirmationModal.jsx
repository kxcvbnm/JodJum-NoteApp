import React from "react";

const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  
    if (!isOpen) return null;

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title || "Confirm Action"}</h3>
        <p className="py-4">{message || "Are you sure?"}</p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={onConfirm}>
            Yes
          </button>
          <button className="btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ConfirmModal;
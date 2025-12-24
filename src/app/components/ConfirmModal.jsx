"use client";

export default function ConfirmModal({
  open,
  onClose,
  onConfirm,
  message,
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h5 className="modal-title">Confirm Action</h5>
        <p className="modal-message">{message}</p>

        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .modal-container {
          background: #fff;
          padding: 30px 25px;
          border-radius: 16px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .modal-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .modal-message {
          font-size: 15px;
          margin-bottom: 25px;
          color: #555;
        }

        .modal-actions {
          display: flex;
          justify-content: space-between;
        }

        .modal-actions .btn {
          flex: 1;
          margin: 0 5px;
        }
      `}</style>
    </div>
  );
}

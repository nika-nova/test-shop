import styles from './Modal.module.css'; // подключаем модуль

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const handleWindowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        onClick={handleWindowClick}
        className={styles.modal}
      >
        <button
          type="button"
          onClick={onClose}
          className={styles.closeBtn}
          aria-label="Закрыть"
        >
          ×
        </button>

        <h3 className={styles.title}>В разработке</h3>
      </div>
    </div>
  );
};

export default Modal;
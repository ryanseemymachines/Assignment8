import styles from "./index.module.css";

const ThemeModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalSidebar} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ThemeModal;

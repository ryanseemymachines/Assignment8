import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./index.module.css";

const ThemeModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ThemeModal;

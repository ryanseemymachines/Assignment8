import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ThemePicker from "../ThemePicker";
import ThemeModal from "../ThemeModal";
import Button from "../Button";
import styles from "./index.module.css";

const Header = () => {
  const { darkMode, currentPalette, setColourPalette, toggleTheme } =
    useContext(ThemeContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previousPalette, setPreviousPalette] = useState(null);

  const openModal = () => {
    if (darkMode) {
      alert("Turn off dark mode before changing the theme.");
      return;
    }
    setPreviousPalette(currentPalette);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setColourPalette(previousPalette);
    setIsModalOpen(false);
  };

  const handlePickerClose = (shouldSave) => {
    if (!shouldSave) {
      setColourPalette(previousPalette);
    }
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <Button
        className={styles.headerBtn}
        type="button"
        onClick={toggleTheme}
        title="DarkMode"
      />
      <Button
        className={styles.headerBtn}
        type="button"
        onClick={openModal}
        title="Change Theme"
      />

      <ThemeModal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modalTitle}>
          <h1>Choose a colour</h1>
          <Button
            className={styles.closeBtn}
            type="button"
            onClick={closeModal}
            title="X"
          />
        </div>

        <ThemePicker onClose={handlePickerClose} />
      </ThemeModal>
    </header>
  );
};

export default Header;

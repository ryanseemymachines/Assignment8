import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeModal from "../ThemeModal";
import Button from "../Button";
import styles from "./index.module.css";

const Header = () => {
  const { toggleTheme, setColourPalete , colorPalettes,darkMode } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <header className={styles.header}>
      <p>Current theme: {darkMode ? "dark" : "light"}</p>
      <Button type="button" onClick={toggleTheme} title="DarkMode"></Button>
      <Button type="button" onClick={openModal} title="Select Theme"></Button>
      <ThemeModal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modalTitle}>
          <h1>Choose a colour: </h1>
        <Button type="button" onClick={closeModal} title="X"/>
        </div>
        
        {colorPalettes.map((color, index) => {
          return (
            <button
              key={index}
              onClick={() => setColourPalete(index)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: color[2],
                cursor: "pointer",
                marginRight: "20px",
                border: "1px solid #ccc",
              }}
            ></button>
          );
        })}
      </ThemeModal>
    </header>
  );
};

export default Header;

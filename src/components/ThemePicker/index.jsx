import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../Button";
import styles from "./index.module.css";

const ThemePicker = ({ onClose }) => {
  const { colorPalettes, setColourPalette, currentPalette } =
    useContext(ThemeContext);

  const handlePaletteClick = (index) => {
    setColourPalette(index);
  };

  const handleSave = () => {
    onClose(true);
  };

  const handleCancel = () => {
    onClose(false);
  };

  return (
    <>
      <div className={styles.paletteList}>
        {colorPalettes.map((palette, index) => {
          const values = Object.values(palette);

          return (
            <div
              key={index}
              className={`${styles.palette} ${
                index === currentPalette ? styles.active : ""
              }`}
              onClick={() => handlePaletteClick(index)}
            >
              <span
                style={{
                  background: values[2],
                  width: 50,
                  height: 50,
                  display: "inline-block",
                  borderRadius: "50%",
                  margin: "3px",
                }}
              ></span>
            </div>
          );
        })}
      </div>

      <div className={styles.btns}>
        <Button
          className={styles.modalBtn}
          type="button"
          onClick={handleCancel}
          title="Cancel"
        />
        <Button
          className={styles.modalBtn}
          type="button"
          onClick={handleSave}
          title="Save"
        />
      </div>
    </>
  );
};

export default ThemePicker;

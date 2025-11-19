import styles from "./index.module.css";

const Button = ({ type, title, onClick }) => {
  return (
    <button className={styles.btn} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

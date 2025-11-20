import styles from "./index.module.css";

const Button = ({ type, title, onClick, className }) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

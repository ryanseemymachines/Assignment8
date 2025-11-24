import styles from "./index.module.css";
import Button from "../Button";

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className={styles.navBar}>
      <Button
        type="button"
        onClick={() => setActiveTab("dashboard")}
        title="Dashboard"
        className={`${styles.navBtn} ${
          activeTab === "dashboard" ? styles.activeTab : ""
        }`}
      />

      <Button
        type="button"
        onClick={() => setActiveTab("employees")}
        title="Employees"
        className={`${styles.navBtn} ${
          activeTab === "employees" ? styles.activeTab : ""
        }`}
      />

      <Button
        type="button"
        onClick={() => setActiveTab("profile")}
        title="Profile"
        className={`${styles.navBtn} ${
          activeTab === "profile" ? styles.activeTab : ""
        }`}
      />
    </nav>
  );
};

export default Navbar;

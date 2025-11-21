import { useState, useEffect } from "react";
import styles from "./index.module.css";

const UserProfile = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    if (data.length === 0) return;

    const timer = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % data.length);
        setFade(true);
      }, 600);
    }, 3000);

    return () => clearInterval(timer);
  }, [data]);

  const user = data[index];

  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.profileHeading}>User Profile</h2>
      <p className={styles.sub}>Employee details auto-rotate every 3 seconds</p>

      <div className={styles.fadeWrapper}>
        <div
          className={`${styles.profileCard} ${styles.fadeCard} ${
            fade ? styles.show : ""
          }`}
        >
          <div className={styles.profileAvatar}>
            {user.name.charAt(0).toUpperCase()}
          </div>

          <h3 className={styles.profileName}>{user.name}</h3>
          <p className={styles.profileRole}>{user.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

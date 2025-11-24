import styles from "./index.module.css";
const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.pageHeading}>Dashboard</h1>

      <div className={styles.dashboardCard}>
        <p>Welcome to the Employee Portal dashboard.</p>
        <p>Use the navigation above to switch between modules.</p>
      </div>
    </div>
  );
};

export default Dashboard;

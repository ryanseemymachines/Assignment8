import styles from "./index.module.css";

const EmployeeList = ({ data }) => {
  return (
    <div className={styles.employeeContainer}>
      <h2 className={styles.pageHeading}>Employee List</h2>

      <div className={styles.employeeGrid}>
        {data.map((emp) => (
          <div key={emp.id} className={styles.employeeCard}>
            <div className={styles.employeeAvatar}>
              {emp.name.charAt(0).toUpperCase()}
            </div>

            <div className={styles.employeeInfo}>
              <h3 className={styles.employeeName}>{emp.name}</h3>
              <p className={styles.employeeRole}>{emp.designation}</p>
              <p className={styles.employeeDOB}>
                DOB : {new Date(emp.dob).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;

const EmployeeList = ({ data }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {data.map((emp) => (
          <li key={emp.id}>
            <b>{emp.name}</b> — {emp.designation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

import { useState ,Suspense ,lazy } from "react";
import withLoading from "./hoc/withLoading";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Loader from "./components/Loader";
import "./App.css";

const Dashboard = lazy(() => import("./components/Dashboard"));
const UserProfile = lazy(() => import("./components/userProfile"));

import EmployeeList from "./components/EmployeeList";
import Button from "./components/Button";
const EmployeeListWithLoading = withLoading(
  EmployeeList,
  "https://6580190d6ae0629a3f54561f.mockapi.io/api/v1/employee"
);

const App = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div>
      <ThemeProvider>
        <Header />
        <nav className="navBar">
          <Button type="button" onClick={() => setActiveTab("dashboard")} title="Dashboard"></Button>
          <Button type="button" onClick={() => setActiveTab("employees")} title="Employees"></Button>
          <Button type="button" onClick={() => setActiveTab("profile")} title="Profile"></Button>
        </nav>

        <Suspense fallback={<Loader/>}>
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "employees" && <EmployeeListWithLoading />}
          {activeTab === "profile" && <UserProfile />}
        </Suspense>

        <footer>
          © 2025 Employee Portal
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default App;

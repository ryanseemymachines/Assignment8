import { useState, Suspense, lazy } from "react";
import withLoading from "./hoc/withLoading";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import "./App.css";

const Dashboard = lazy(() => import("./components/Dashboard"));
const EmployeeList = lazy(() => import("./components/EmployeeList"));
const UserProfile = lazy(() => import("./components/UserProfile"));

import EmployeeList from "./components/EmployeeList";
import Button from "./components/Button";
const EmployeeListWithLoading = withLoading(
  EmployeeList,
  "https://6580190d6ae0629a3f54561f.mockapi.io/api/v1/employee"
);

const UserProfileWithLoading = withLoading(
  UserProfile,
  "https://6580190d6ae0629a3f54561f.mockapi.io/api/v1/employee"
);

const App = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="pageWrapper">
      <ThemeProvider>
        <Header />
        <nav className="navBar">
          <Button
            type="button"
            onClick={() => setActiveTab("dashboard")}
            title="Dashboard"
            className={`navBtn ${activeTab === "dashboard" ? "activeTab" : ""}`}
          />
          <Button
            type="button"
            onClick={() => setActiveTab("employees")}
            title="Employees"
            className={`navBtn ${activeTab === "employees" ? "activeTab" : ""}`}
          ></Button>
          <Button
            type="button"
            onClick={() => setActiveTab("profile")}
            title="Profile"
            className={`navBtn ${activeTab === "profile" ? "activeTab" : ""}`}
          ></Button>
        </nav>
        <div className="contentWrapper">
          <Suspense fallback={<Loader />}>
            {activeTab === "dashboard" && <Dashboard />}
            {activeTab === "employees" && <EmployeeListWithLoading />}
            {activeTab === "profile" && <UserProfileWithLoading />}
          </Suspense>
        </div>

        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;

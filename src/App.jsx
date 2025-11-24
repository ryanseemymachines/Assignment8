import { useState, Suspense, lazy } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import withLoading from "./hoc/withLoading";
import ComponentLoader from "./components/ComponentLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

const Dashboard = lazy(() => import("./components/Dashboard"));

const EmployeeList = lazy(() => import("./components/EmployeeList"));
const EmployeeListWithLoading = withLoading(
  EmployeeList,
  "https://6580190d6ae0629a3f54561f.mockapi.io/api/v1/employee"
);

const UserProfile = lazy(() => import("./components/UserProfile"));
const UserProfileWithLoading = withLoading(
  UserProfile,
  "https://6580190d6ae0629a3f54561f.mockapi.io/api/v1/employee"
);

const App = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <ThemeProvider>
      <div className="pageWrapper">
        <Header />
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="contentWrapper">
          <Suspense fallback={<ComponentLoader />}>
            {activeTab === "dashboard" && <Dashboard />}
          </Suspense>
          <Suspense fallback={<ComponentLoader />}>
            {activeTab === "employees" && <EmployeeListWithLoading />}
          </Suspense>
          <Suspense fallback={<ComponentLoader />}>
            {activeTab === "profile" && <UserProfileWithLoading />}
          </Suspense>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

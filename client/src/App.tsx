import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Questionary from "./pages/Questionary";
import Recommandation from "./pages/Recommandation";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import UserProtected from "./global/UserProtected";
import MainAppLayout from "./components/layouts/MainAppLayout";
import DashboardLayout from "./components/layouts/admin/DashboardLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminProtected from "./global/AdminProtected";

function App() {
  return (
    <Router>
      <Routes>
        {/* user routes */}
        <Route element={<MainAppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/questionary" element={<Questionary />} />
          <Route path="/recommendation" element={<Recommandation />} />
          <Route path="/approach" element={<Detail />} />
          {/* User Protected Routes */}
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* admin routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          {/* admin protected do like this */}
          <Route
            path="/admin/dashboard"
            element={
              <AdminProtected>
                <Dashboard />
              </AdminProtected>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

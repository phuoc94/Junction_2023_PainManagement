import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import DashboardLayout from './components/layouts/admin/DashboardLayout'
import MainAppLayout from './components/layouts/MainAppLayout'
import AdminProtected from './global/AdminProtected'
import Dashboard from './pages/admin/Dashboard'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Questionary from './pages/Questionary'
import Recommandation from './pages/Recommandation'
import SignUp from './pages/SignUp'

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
  )
}

export default App

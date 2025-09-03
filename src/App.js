import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {DashBoard} from "./pages/DashBoard";
import { HolidayMaster, EmployeeMaster, DesignationMaster } from "./pages/Masters";
import Pageaccess, { UserRegister } from "./pages/PageAccess";
import { LogReport, AttendanceReport, MonthlyReport } from "./pages/Reports";
import  {ChangePassword } from "./pages/ChangePassword";

import { Masters } from './pages/Masters';
import { Reports } from './pages/Reports';
import Profile from './pages/Profile';
import Logout from './pages/Logout';


function App() {
  
    const [showModal, setShowModal] = useState(false);
   
    

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleLogout = () => {
        // Add your logout logic here
        console.log("Logged out");
        handleCloseModal();
        
    };
    return (
        <Router>
            <Sidebar onLogoutClick={handleShowModal}  />
            <Logout show={showModal} handleClose={handleCloseModal} handleLogout={handleLogout}/>
            
            <Routes>
                <Route path="/DashBoard" element={<DashBoard />} />
                <Route path="/Masters" element={<Masters />} />
                <Route path="/Masters/DesignationMaster" element={<DesignationMaster />} />
                <Route path="/Masters/EmployeeMaster" element={<EmployeeMaster />} />
                <Route path="/Masters/HolidayMaster" element={<HolidayMaster />} />
                <Route path="/Reports" element={<Reports />} />
                <Route path="/Reports/LogReport" element={<LogReport />} />
                <Route path="/Reports/AttendanceReport" element={<AttendanceReport />} />
                <Route path="/Reports/MonthlyReport" element={<MonthlyReport />} />
                <Route path="/PageAccess"element={<Pageaccess/>} />
                <Route path="/PageAccess/Pageaccess" element={<Pageaccess />} />
                <Route path="/PageAccess/UserRegister" element={<UserRegister />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/ChangePassword" element={<ChangePassword />} />
                <Route path="/Logout" element={<Logout/>}/>
            </Routes>
        </Router>
    );
}

export default App;
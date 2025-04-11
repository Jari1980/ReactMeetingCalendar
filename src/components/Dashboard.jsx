import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import MeetingForm from './MeetingForm';
import ManageMeetings from './ManageMeetings';
import DashHome from './DashHome';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import MeetingsTable from './MeetingsTable';
import { useMeetingContext } from './context';



const Dashboard = () => {
    const navigate = useNavigate();
    const {background, setBackground} = useMeetingContext();
    const {bgMain, setBgMain} = useMeetingContext();
    
    return (
        <>
        <div style={{ display: "flex", height: "1200px"}}>
        <aside
        style={{
          background: background,
          padding: "16px",
          borderRight: "1px solid #ddd",
        }}
      >
        <Nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => navigate("../dashboard")}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => navigate("../dashboard/schedulemeeting")}
              >
                Schedule Meeting
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => navigate("../dashboard/managemeetings")}
              >
                Manage Meetings
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => navigate("../dashboard/manageall")}
              >
                Manage and schedule
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                disabled
              >
                User & Permissions
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                disabled
              >
                Notifications
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                disabled
              >
                Analytics
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                disabled
              >
                Settings
              </button>
            </li>
          </ul>
        </Nav>
      </aside>
      <div style={{backgroundImage:bgMain, width:"100vw", height:"100vh", overflow: "hidden", marginLeft: "-2px"}}>
      <main style={{ flex:2, padding: "16px" }}>
        <Routes>
            <Route path='/' element={<DashHome/>}/>
            <Route path='/schedulemeeting' element={<MeetingForm/>}/>
            <Route path='/managemeetings' element={<MeetingsTable/>}/>
            <Route path='/manageall' element={<ManageMeetings/>}/>
        </Routes>
        </main>
        </div>
        </div>
        </>
    );
};

export default Dashboard;
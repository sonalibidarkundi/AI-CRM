import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

import {
  FaHome,
  FaUserMd,
  FaPlusCircle,
  FaClipboardList,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";


function Sidebar() {

  const navigate = useNavigate();


  return (
    <div className="sidebar">

      <div className="logo-section">
        <h2>AI CRM</h2>
      </div>


      <ul className="menu">


        <li onClick={() => navigate("/dashboard")}>
          <FaHome />
          <span>Dashboard</span>
        </li>


        <li onClick={() => navigate("/hcp")}>
          <FaUserMd />
          <span>HCP List</span>
        </li>


        <li onClick={() => navigate("/add-hcp")}>
          <FaPlusCircle />
          <span>Add HCP</span>
        </li>


        <li onClick={() => navigate("/log-interaction")}>
          <FaClipboardList />
          <span>Log Interaction</span>
        </li>


        <li onClick={() => navigate("/analytics")}>
          <FaChartBar />
          <span>Analytics</span>
        </li>


        <li onClick={() => navigate("/settings")}>
          <FaCog />
          <span>Settings</span>
        </li>


      </ul>


      <button
        className="logout-btn"
        onClick={() => navigate("/")}
      >
        <FaSignOutAlt />
        Logout
      </button>


    </div>
  );
}


export default Sidebar;
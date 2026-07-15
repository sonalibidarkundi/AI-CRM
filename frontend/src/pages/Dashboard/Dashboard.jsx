import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">

        {/* Header */}
        <Header />

        {/* Dashboard Title */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">
            Dashboard
          </h1>

          <h2 className="dashboard-subtitle">
            Welcome to AI First CRM - HCP Module
          </h2>
        </div>

        {/* Dashboard Cards */}
        <div className="card-container">

          <div className="card">
            <h2>120</h2>
            <p>Total HCPs</p>
          </div>

          <div className="card">
            <h2>15</h2>
            <p>Today's Interactions</p>
          </div>

          <div className="card">
            <h2>8</h2>
            <p>Pending Follow-ups</p>
          </div>

          <div className="card">
            <h2>5</h2>
            <p>AI Suggestions</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;
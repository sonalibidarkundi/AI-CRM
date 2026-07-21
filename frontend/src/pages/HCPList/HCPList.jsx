import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./HCPList.css";
import bgImage from "../../assets/doc4.jpg";

function HCPList() {
  const [hcpData, setHcpData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHCP();
  }, []);

  const fetchHCP = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/hcp");
      setHcpData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="page-layout"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Sidebar />

      <div className="page-content">
        <Header />

        <div className="hcp-page">
          <div className="hcp-container">
            <div className="hcp-header">
              <div>
                <h1>Healthcare Professionals</h1>
                <p>Manage all Healthcare Professionals</p>
              </div>

            </div>

            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="hcp-grid">
                {hcpData.map((hcp) => (
                  <div className="hcp-card" key={hcp.id}>
                    <div className="hcp-top">
                      <div className="doctor-avatar">👨‍⚕️</div>

                      
                    </div>

                    <div className="hcp-details">
                      <p><b>Hospital:</b> {hcp.hospital}</p>
                      <p><b>Specialty:</b> {hcp.specialty}</p>
                      <p><b>Department:</b> {hcp.department}</p>
                      <p><b>Location:</b> {hcp.city}, {hcp.state}</p>
                      <p><b>Phone:</b> {hcp.phone}</p>
                      <p><b>Email:</b> {hcp.email}</p>
                      <p><b>Notes:</b> {hcp.notes}</p>
                    </div>

                    
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HCPList;
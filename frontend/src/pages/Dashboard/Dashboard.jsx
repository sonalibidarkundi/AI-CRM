import { useEffect, useState } from "react";
import axios from "axios";

import "./Dashboard.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";


function Dashboard() {


  const [stats, setStats] = useState({

    total_hcp: 0,

    today_interactions: 0,

    pending_followups: 0,

    ai_suggestions: 0

  });



  useEffect(() => {

    fetchDashboardStats();

  }, []);




  const fetchDashboardStats = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/dashboard/stats"
      );


      setStats(response.data);


    } catch (error) {

      console.log(
        "Dashboard API Error:",
        error
      );

    }

  };




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

            <h2>

              {stats.total_hcp}

            </h2>

            <p>

              Total HCPs

            </p>

          </div>





          <div className="card">

            <h2>

              {stats.today_interactions}

            </h2>

            <p>

              Today's Interactions

            </p>

          </div>





          <div className="card">

            <h2>

              {stats.pending_followups}

            </h2>

            <p>

              Pending Follow-ups

            </p>

          </div>





          <div className="card">

            <h2>

              {stats.ai_suggestions}

            </h2>

            <p>

              AI Suggestions

            </p>

          </div>



        </div>



      </div>


    </div>

  );

}


export default Dashboard;
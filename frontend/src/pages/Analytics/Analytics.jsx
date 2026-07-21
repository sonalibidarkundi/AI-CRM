import { useEffect, useState } from "react";
import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import "./Analytics.css";

function Analytics() {
  const [stats, setStats] = useState({
    total_hcp: 0,
    total_interactions: 0,
    success_rate: 0,
    hcp_growth: [],
    interaction_types: [],
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/analytics/stats"
      );

      setStats(response.data);
    } catch (error) {
      console.log("Analytics API Error:", error);
    }
  };

  const COLORS = [
    "#2563eb",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#06b6d4",
  ];

  return (
    <div className="analytics-layout">
      <Sidebar />

      <div className="analytics-content">
        <Header />

        {/* Page Heading */}

        <div className="analytics-header">
          <h1>Analytics</h1>
          <p>AI insights and interaction analytics</p>
        </div>

        {/* Statistics Cards */}

        <div className="analytics-cards">

          <div className="analytics-card">
            <h2>{stats.total_interactions}</h2>
            <p>Total Interactions</p>
          </div>

          <div className="analytics-card">
            <h2>{stats.success_rate}%</h2>
            <p>Successful Follow-ups</p>
          </div>

          <div className="analytics-card">
            <h2>{stats.total_hcp}</h2>
            <p>New HCP Connections</p>
          </div>

        </div>

        {/* Bottom Section */}

        <div className="analytics-bottom">

          {/* AI Insight */}

          <div className="ai-insight">

            <h2>AI Insights</h2>

            <div className="insight-box">

              <p>
                <strong>Total HCPs :</strong> {stats.total_hcp}
              </p>

              <p>
                <strong>Total Interactions :</strong> {stats.total_interactions}
              </p>

              <p>
                <strong>Success Rate :</strong> {stats.success_rate}%
              </p>

              <p>
                <strong>Recommendation :</strong>
                <br /><br />
                Continue increasing hospital visits and follow-up calls.
                Focus on hospitals with fewer interactions to improve
                HCP engagement and relationship building.
              </p>

            </div>

          </div>

          {/* Pie Chart */}

          <div className="chart-card">

            <h2>Interaction Types</h2>

            <ResponsiveContainer width="100%" height={350}>

              <PieChart>

                <Pie
                  data={stats.interaction_types}
                  dataKey="count"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label
                >
                  {stats.interaction_types.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Analytics;
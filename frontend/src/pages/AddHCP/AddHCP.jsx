import { useState } from "react";
import axios from "axios";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./AddHCP.css";

function AddHCP() {
  const initialState = {
    name: "",
    hospital: "",
    specialty: "",
    department: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    status: "Active",
    notes: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveHCP = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/hcp",
        formData
      );

      console.log(response.data);

      alert("HCP Added Successfully");

      setFormData(initialState);

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Failed to add HCP");
    }
  };

  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <Header />

        <div className="addhcp-card">

          <h1>Add Healthcare Professional</h1>

          <p>
            Register a new Healthcare Professional into the AI CRM platform.
          </p>

          <form onSubmit={saveHCP}>

            <div className="grid">

              <div className="form-group">
                <label>HCP Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Hospital</label>
                <input
                  type="text"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Specialty</label>
                <input
                  type="text"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>Notes</label>
                <textarea
                  rows="5"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="button-group">

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setFormData(initialState)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="save-btn"
              >
                Save HCP
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default AddHCP;
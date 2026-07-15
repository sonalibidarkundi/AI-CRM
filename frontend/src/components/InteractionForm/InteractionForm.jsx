import { useState } from "react";
import "./InteractionForm.css";

function InteractionForm() {
  const [formData, setFormData] = useState({
    hcp_name: "",
    hospital: "",
    specialty: "",
    interaction_type: "",
    product_discussed: "",
    discussion_summary: "",
    interaction_date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveInteraction = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/interaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Interaction Saved Successfully!");

        setFormData({
          hcp_name: "",
          hospital: "",
          specialty: "",
          interaction_type: "",
          product_discussed: "",
          discussion_summary: "",
          interaction_date: "",
        });
      } else {
        alert(data.detail || "Failed to save interaction.");
      }
    } catch (error) {
      console.error(error);
      alert("Backend connection failed.");
    }
  };

  return (
    <div className="interaction-card">
      <div className="card-header">
        <h2>📝 Interaction Form</h2>
        <p>Capture Healthcare Professional interaction details</p>
      </div>

      <form className="interaction-form" onSubmit={saveInteraction}>

        <div className="form-group">
          <label>HCP Name</label>
          <input
            type="text"
            name="hcp_name"
            value={formData.hcp_name}
            onChange={handleChange}
            placeholder="Enter Healthcare Professional Name"
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
            placeholder="Enter Hospital Name"
          />
        </div>

        <div className="form-group">
          <label>Specialty</label>
          <input
            type="text"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            placeholder="Cardiology, Neurology, etc."
          />
        </div>

        <div className="form-group">
          <label>Interaction Type</label>

          <select
            name="interaction_type"
            value={formData.interaction_type}
            onChange={handleChange}
          >
            <option value="">Select Interaction Type</option>
            <option>Visit</option>
            <option>Phone Call</option>
            <option>Email</option>
            <option>Conference</option>
          </select>
        </div>

        <div className="form-group">
          <label>Product Discussed</label>
          <input
            type="text"
            name="product_discussed"
            value={formData.product_discussed}
            onChange={handleChange}
            placeholder="Enter Product Name"
          />
        </div>

        <div className="form-group">
          <label>Discussion Summary</label>

          <textarea
            rows="5"
            name="discussion_summary"
            value={formData.discussion_summary}
            onChange={handleChange}
            placeholder="Write discussion details..."
          ></textarea>
        </div>

        <div className="form-group">
          <label>Interaction Date</label>

          <input
            type="date"
            name="interaction_date"
            value={formData.interaction_date}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="save-btn">
          Save Interaction
        </button>

      </form>
    </div>
  );
}

export default InteractionForm;
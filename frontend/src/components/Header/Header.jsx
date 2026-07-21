import "./Header.css";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Header() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search HCP, Hospital..."
        />
      </div>

      <div className="header-right">
        <span className="date">{today}</span>

        

        <div className="profile">
          <FaUserCircle className="profile-icon" />

          <div>
            <h4>Sonali</h4>
            <p>Field Representative</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
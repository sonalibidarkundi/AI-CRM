import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import LogInteraction from "./pages/LogInteraction/LogInteraction";
import HCPList from "./pages/HCPList/HCPList";
import Analytics from "./pages/Analytics/Analytics";
import Settings from "./pages/Settings/Settings";
import AddHCP from "./pages/AddHCP/AddHCP";
import Register from "./pages/Register/Register";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/log-interaction" element={<LogInteraction />} />
      <Route path="/hcp" element={<HCPList />} />

<Route path="/analytics" element={<Analytics />} />

<Route path="/settings" element={<Settings />} />
<Route path="/add-hcp" element={<AddHCP />} />
<Route
 path="/register"
 element={<Register />}
/>
    </Routes>
  );
}

export default App;
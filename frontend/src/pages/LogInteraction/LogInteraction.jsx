import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import ChatPanel from "../../components/ChatPanel/ChatPanel";

function LogInteraction() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <Header />

        <ChatPanel />
      </div>
    </div>
  );
}

export default LogInteraction;
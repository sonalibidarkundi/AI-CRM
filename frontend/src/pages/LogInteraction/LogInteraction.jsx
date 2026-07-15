import InteractionForm from "../../components/InteractionForm/InteractionForm";
import ChatPanel from "../../components/ChatPanel/ChatPanel";

function LogInteraction() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Log Interaction</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <InteractionForm />
        <ChatPanel />
      </div>
    </div>
  );
}

export default LogInteraction;
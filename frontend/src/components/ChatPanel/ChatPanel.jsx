import "./ChatPanel.css";
import { useState } from "react";

function ChatPanel() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Hello! Describe your HCP interaction and I will help log it.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    console.log("✅ Send button clicked");

    if (message.trim() === "") return;

    const userMessage = {
      sender: "You",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
        }),
      });

      const data = await response.json();

      console.log("API Response:", data);

      let aiReply = "No response from AI";

      if (Array.isArray(data.response)) {
        aiReply = data.response[0].text;
      } else {
        aiReply = data.response;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          text: aiReply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          text: "❌ Unable to connect to AI backend.",
        },
      ]);
    }

    setLoading(false);
    setMessage("");
  };

  return (
    <div className="chat-card">
      <div className="chat-header">
        <h2>🤖 AI Assistant</h2>
        <p>Log interaction using natural language</p>
      </div>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "AI" ? "ai-message" : "user-message"}
          >
            <b>{msg.sender}</b>
            <p>{msg.text}</p>
          </div>
        ))}

        {loading && (
          <div className="ai-message">
            <b>AI</b>
            <p>Thinking...</p>
          </div>
        )}
      </div>

      <div className="chat-input">
        <textarea
          rows="4"
          placeholder="Example: Met Dr. Sharma at Apollo Hospital..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="button"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatPanel;
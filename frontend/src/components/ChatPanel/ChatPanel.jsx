import "./ChatPanel.css";
import { useState } from "react";

function ChatPanel() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Hello! Describe your HCP interaction and I will help log it."
    }
  ]);


  const sendMessage = () => {

    if(message.trim()==="") return;


    setMessages([
      ...messages,
      {
        sender:"You",
        text:message
      },
      {
        sender:"AI",
        text:"I have analyzed your interaction. AI extraction will be connected with LangGraph."
      }
    ]);


    setMessage("");

  };


  return (

    <div className="chat-card">


      <div className="chat-header">

        <h2>🤖 AI Assistant</h2>

        <p>
          Log interaction using natural language
        </p>

      </div>



      <div className="chat-box">


        {
          messages.map((msg,index)=>(

            <div
              key={index}
              className={
                msg.sender==="AI"
                ?"ai-message"
                :"user-message"
              }
            >

              <b>{msg.sender}</b>

              <p>{msg.text}</p>


            </div>

          ))
        }


      </div>



      <div className="chat-input">


        <textarea

          rows="4"

          placeholder="Example: Met Dr. Sharma at Apollo Hospital..."

          value={message}

          onChange={(e)=>setMessage(e.target.value)}

        />


        <button onClick={sendMessage}>
          Send
        </button>


      </div>


    </div>

  );

}


export default ChatPanel;
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import Message from "./Message";
import { useAuth } from "../../context/AuthContext";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>SuperChat</h2>
        <div className="auth-details">
          <p>Welcome, {currentUser?.email}</p>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}

export default ChatBox;
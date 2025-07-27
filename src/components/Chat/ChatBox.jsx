import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, query, orderBy, onSnapshot, doc } from "firebase/firestore";
import Message from "./Message";
import { useAuth } from "../../context/AuthContext";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const { currentUser } = useAuth();

  // Fetch messages
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribeMessages = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return unsubscribeMessages;
  }, []);

  // Fetch username from Firestore when currentUser changes
  useEffect(() => {
    if (currentUser?.uid) {
      const userDocRef = doc(db, "users", currentUser.uid);
      const unsubscribeUser = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          setUsername(doc.data().username);
        }
      });
      return unsubscribeUser;
    }
  }, [currentUser]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>SuperChat</h2>
        <div className="auth-details">
          <p>Welcome, {username || currentUser?.email}</p>
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
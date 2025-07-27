import { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";

function SendMessage() {
  const [message, setMessage] = useState("");
  const { currentUser } = useAuth();

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    await addDoc(collection(db, "messages"), {
      text: message,
      name: currentUser.email,
      uid: currentUser.uid,
      timestamp: serverTimestamp(),
    });
    setMessage("");
  };

  return (
    <form className="message-form" onSubmit={sendMessage}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default SendMessage;
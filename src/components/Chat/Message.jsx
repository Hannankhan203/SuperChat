import { useAuth } from "../../context/AuthContext";

function Message({ message }) {
  const { currentUser } = useAuth();
  const isCurrentUser = message.uid === currentUser?.uid;

  return (
    <div className={`message ${isCurrentUser ? 'current-user' : 'other-user'}`}>
      <p>{message.text}</p>
      <div className="message-info">
        <span>{message.name}</span>
        <span>{new Date(message.timestamp?.toDate()).toLocaleTimeString()}</span>
      </div>
    </div>
  );
}

export default Message;
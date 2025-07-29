import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../../context/AuthContext";

function AuthDetails() {
  const { currentUser } = useAuth();

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="auth-details">
      {currentUser ? (
        <>
          <p className="current-user">Signed in as {currentUser.email}</p>
          <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}

export default AuthDetails;
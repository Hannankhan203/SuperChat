import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ChatBox from "./components/Chat/ChatBox";
import SendMessage from "./components/Chat/SendMessage";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/chat"
              element={
                <PrivateRoute>
                  <ChatBox />
                  <SendMessage />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
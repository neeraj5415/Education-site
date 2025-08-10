import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./form/Signup.jsx";
import Login from "./form/Login.jsx";
import Home from "./Pages/Home.jsx";
import FloatingPopups from "./components/FloatingPopups.jsx";  // import the component

export default function App() {
  return (
    <Router>
      {/* Floating popups will show on all pages */}
      <FloatingPopups />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

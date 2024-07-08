import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./views/Login/Login";
import Profile from "./views/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container my-3">
        <Routes>
          <Route path="/" element={<div>home</div>} />
          <Route path="/login" element={<Login />} />

          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

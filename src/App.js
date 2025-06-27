import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login user={user} />} />
        <Route
          path="/signup"
          element={<SignUp user={user} setUser={setUser} />}
        />
        <Route path="/app" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

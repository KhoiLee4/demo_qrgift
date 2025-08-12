import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import ScanPage from "./pages/ScanPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePage />} />
        <Route path="/scan" element={<ScanPage />} />
      </Routes>
    </Router>
  );
}

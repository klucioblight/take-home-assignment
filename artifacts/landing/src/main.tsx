import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TakeHome from "./TakeHome";
import Prototype from "./Prototype";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/take-home-assignment" element={<TakeHome />} />
      <Route path="/prototype" element={<Prototype />} />
    </Routes>
  </BrowserRouter>
);

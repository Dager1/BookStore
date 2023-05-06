import "./App.css";
import Home from "./Componets/Home";
import Login from "./Componets/Login";
import NavBar from "./Componets/NavBar";
import Registeration from "./Componets/Registeration";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="/navbar" element={<NavBar />} />
      <Route path="/register" element={<Registeration />} />
    </Routes>
  );
}

export default App;

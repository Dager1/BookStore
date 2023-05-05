import "./App.css";
import Login from "./Componets/Login";
import NavBar from "./Componets/NavBar";
import Registeration from "./Componets/Registeration";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/navBar" element={<NavBar />} />
      <Route path="/register" element={<Registeration />} />
    </Routes>
  );
}

export default App;

import './App.css';
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Ruta protegida para Home */}
        <Route path="/home" element={

            <Home />

        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

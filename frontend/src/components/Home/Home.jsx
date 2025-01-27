import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import News from "../News/News";

function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // Función para cerrar sesión
  const cerrarSesion = () => {
    const cookies = new Cookies();
    cookies.remove("Token", { path: "/" });
    navigate("/");
  };

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("Token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.Username);
      } catch (error) {
        console.error("Error al decodificar el token", error);
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <nav className="navbar">
        <h1 className="logo">LoL Match</h1>
        <ul className="nav-links">
          <li><button className="logout-menu-btn" onClick={cerrarSesion}>Stremear</button></li>
          <li><button className="logout-menu-btn" onClick={cerrarSesion}>Buscar Jugadores</button></li>
          <li><button className="logout-menu-btn" onClick={cerrarSesion}>Buscar Teams</button></li>
          <li><button className="logout-menu-btn" onClick={cerrarSesion}>Crear Teams</button></li>
          <li><button className="logout-menu-btn" onClick={cerrarSesion}>Explorar</button></li>
          <li><button className="logout-menu-btn" onClick={cerrarSesion}>Mis Estadisticas</button></li>
        </ul>
        <div className="user-section">
  <div className="dropdown">
    <button className="dropdown-btn">
      {username ? `Hola, ${username}!` : "Bienvenido, Invitado!"}
      <span className="dropdown-icon">▼</span>
    </button>
    <ul className="dropdown-menu">
      <li><button className="logout-menu-btn" onClick={cerrarSesion}>Perfil</button></li>
      <li><button className="logout-menu-btn" onClick={cerrarSesion}>Configuracion</button></li>
      <li><button className="logout-menu-btn" onClick={cerrarSesion}>Ayuda</button></li>
      <li><button className="logout-menu-btn" onClick={cerrarSesion}>Soporte Tecnico</button></li>
      <li><button className="logout-menu-btn cerrarSession" onClick={cerrarSesion}>Cerrar sesión</button></li>
    </ul>
  </div>
</div>

      </nav>

      <div className="hero">
        <div className="content">
          <h2>Bienvenido a LoL Match</h2>
          <p>
            Únete a nuestra comunidad y encuentra compañeros de equipo para clasificar juntos 
            o un partner perfecto para tus aventuras en la Grieta.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://static.leagueoflegends.com/sites/default/files/styles/wide_medium/public/upload/lol_social_2021_0.jpg"
            alt="League of Legends"
          />
        </div>
      </div>
      <News />
      <Footer />
    </div>
    
  );
}

export default Home;

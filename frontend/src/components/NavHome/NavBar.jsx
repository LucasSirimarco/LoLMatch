
import "./navHome.css";
import { useNavigate } from "react-router-dom";


const NavHome = ( { username , cerrarSesion }) => {
  const navigate = useNavigate();

  const irAVistaPlayer = () => {
    alert("estas navengando a vista jugador")
    navigate('/vistaPlayer');
  };
   const stremear = () => {
    alert("estas navengando stremear")
    navigate('/stremear');
  };
  


  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">LoL Match</h1>
        <ul className="nav-links">
          <li><button className="logout-menu-btn"onClick={stremear}>Stremear</button></li>
          <li><button className="logout-menu-btn">Buscar Jugadores</button></li>
          <li><button className="logout-menu-btn">Buscar Teams</button></li>
          <li><button className="logout-menu-btn">Crear Teams</button></li>
          <li><button className="logout-menu-btn">Explorar</button></li>
          <li><button className="logout-menu-btn">Mis Estadisticas</button></li>
        </ul>
        <div className="user-section">
          <div className="dropdown">
            <button className="dropdown-btn">
              {username ? `Hola, ${username}!` : "Bienvenido, Invitado!"}
              <span className="dropdown-icon">▼</span>
            </button>  
            <ul className="dropdown-menu">
              <li><button className="logout-menu-btn" onClick={irAVistaPlayer}>Perfil</button></li>
              <li><button className="logout-menu-btn">Configuracion</button></li>
              <li><button className="logout-menu-btn">Ayuda</button></li>
              <li><button className="logout-menu-btn">Soporte Tecnico</button></li>
              <li><button className="logout-menu-btn cerrarSession" onClick={cerrarSesion}>Cerrar sesión</button></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>


  );
};

export default NavHome;

import "./navHome.css";

const NavHome = ( { username , cerrarSesion }) => {
  return (
    <div>
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
    </div>


  );
};

export default NavHome;

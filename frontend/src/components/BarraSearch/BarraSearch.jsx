import { useState } from "react";
import "./barraSearch.css";

export default function BarraSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeButton, setActiveButton] = useState("jugador"); // Estado para el botón activo

  const handleSearch = () => {
    alert(`Buscando: ${searchTerm} en ${activeButton === "jugador" ? "Jugadores" : "Cuentas"}`);
  };

  return (
    <div className="container">
      <div className="searchBar">
        <button className="searchButton" onClick={handleSearch}>🔍</button>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
      </div>

      <div className="buttonsContainer">
        <button
          className={activeButton === "jugador" ? "activeButton" : "inactiveButton"}
          onClick={() => setActiveButton("jugador")}
        >
          Buscar Jugador
        </button>
        <button
          className={activeButton === "cuenta" ? "activeButton" : "inactiveButton"}
          onClick={() => setActiveButton("cuenta")}
        >
          Buscar Cuenta
        </button>
      </div>
    </div>
  );
}

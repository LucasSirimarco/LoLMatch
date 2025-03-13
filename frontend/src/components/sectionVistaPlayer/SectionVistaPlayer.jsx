import React, { useState } from "react";
import "./sectionVistaPlayer.css"
import { Pencil, Check  } from "lucide-react"
import SocialTable from "../SocialTable/SocialTable.jsx"


function SectionVistaPlayer() {
  const [editMode, setEditMode] = useState(false);
  const [imagen, setImagen] = useState(null);
  const [perfil, setPerfil] = useState({
    Nick: "Ricardo",
    Nacionalidad: "Uruguay",
    Edad: 22,
    Elo: "Oro",
    Roles: "Top, Jungla",
    Mains: "Lee Sin, Ahri",
    RegionServer: "LAS",
    HorasJugadas: 1500,
  });
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  const handleInputChange = (e, field) => {
    setPerfil({ ...perfil, [field]: e.target.value });
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="container-principal">
    <div className="container1">
      {/* Botón de edición */}
      <div className="editar">
        <button className="edit-button" onClick={toggleEditMode}>
          {editMode ? <Check size={16} /> : <Pencil size={16} />}
        </button>
      </div>

      <div className="perfil-container">
        <table className="perfil-table">
          <tbody>
            {Object.entries(perfil).map(([key, value]) => (
              <tr key={key}>
                <td className="label">{key.charAt(0).toUpperCase() + key.slice(1)}:</td>
                <td>
                  {editMode ? (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleInputChange(e, key)}
                      className="input-edit"
                    />
                  ) : (
                    value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="img-container">
        <div className="fotoPerfil">
          {imagen && <img src={imagen} alt="Foto de perfil" className="imagen-preview" />}
        </div>
        {editMode && (
          <>
            <label htmlFor="fileInput" className="custom-file-upload">
              Subir imagen
            </label>
            <input
              id="fileInput"
              className="inputFile"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </>
        )}
      </div>
    </div>
    <div className="container2">
      <div>
        <SocialTable />
      </div>
    </div>
  </div>
);
}

export default SectionVistaPlayer;

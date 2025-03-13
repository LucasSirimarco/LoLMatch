import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import "./vistaPlayer.css"
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavHome from "../NavHome/NavBar";
import AsideLeft from "../AsideLeft/AsideLeft";
import AsideRigth from "../AsideRigth/AsideRigth";
import SectionVistaPlayer from "../sectionVistaPlayer/SectionVistaPlayer";


function VistaPlayer() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const cerrarSesion = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  }
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log("Codigo Acces DEcodeadoo: " +decodedToken);
        setUsername(decodedToken.username);
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
      <NavHome username={username} cerrarSesion={cerrarSesion} />
      <div className="preHome">
        <AsideLeft />
        <SectionVistaPlayer />
        <AsideRigth />
      </div>
      <Footer />

    </div>

  );
}

export default VistaPlayer;

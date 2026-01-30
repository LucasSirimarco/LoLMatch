import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import "./stremear.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import News from "../News/News";
import NavHome from "../NavHome/NavBar";
import AsideLeft from "../AsideLeft/AsideLeft";
import StreamSection from "../StreamSection/StreamSection";
import AsideRigth from "../AsideRigth/AsideRigth";


function Stremear() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const cerrarSesion = () => {
    //const cookies = new Cookies();
    //cookies.remove("Token", { path: "/" });
    localStorage.removeItem("access_token");
    // Si también necesitas limpiar algún otro dato (por ejemplo, el nombre de usuario)
    navigate("/");
  }
  useEffect(() => {
    //const cookies = new Cookies();
    //const token = cookies.get("Token");
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


const sendRefreshToken = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/refresh-token", {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();
    console.log(data.message);  // Muestra el mensaje del backend
    
    if (response.ok) {
      console.log("Refresh token guardado correctamente");
    } else {
      console.log("Hubo un error al guardar el refresh token");
    }
  } catch (error) {
    console.error("Error al enviar el refresh token:", error);
  }
};


  return (
    <div className="home-container">
      <NavHome username={username} cerrarSesion={cerrarSesion} />
      <div className="preHome">
        <AsideLeft />
        <StreamSection />
        <AsideRigth />
      </div>
      <News />
      <Footer />
      {/* Botón para enviar el refresh token */}
      <button onClick={sendRefreshToken}>Enviar Refresh Token</button>
    </div>

  );
}

export default Stremear;

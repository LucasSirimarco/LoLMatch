import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import News from "../News/News";
import NavHome from "../NavHome/NavBar";
import AsideLeft from "../AsideLeft/AsideLeft";
import Section from "../Section/Section";
import AsideRigth from "../AsideRigth/AsideRigth";
import Card from "../Card/Card";

function Home() {
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
        <Section />
        <AsideRigth />
      </div>
      <div className="card-container">
        <h3> Encuentra a tu Compañero/a ideal</h3>
        <div className="card-container-slide">
          <h3>&#8592;</h3>
          <Card
            player={{
              profilePic: "https://example.com/profile.jpg",
              name: "Faker",
              age: 27,
              rank: "Challenger",
              mainChamps: ["Zed", "LeBlanc", "Ahri"],
              lanes: ["Mid", "Top"],
              server: "KR"
            }}
          />
          <h3>&#8594;</h3>
        </div>
      </div>
      <News />
      <Footer />
      {/* Botón para enviar el refresh token */}
      <button onClick={sendRefreshToken}>Enviar Refresh Token</button>
    </div>

  );
}

export default Home;

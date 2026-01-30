import React, { useState } from "react";
import "./register.css";
import { useNavigate } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [rewpassword, setRewpassword] = useState("");
  const [mail, setMail] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user.trim()) newErrors.user = "El usuario es obligatorio.";
    if (!password.trim()) newErrors.password = "La contraseña es obligatoria.";
    else if (password.length < 6)
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    if (rewpassword !== password) 
      newErrors.rewpassword = "Las contraseñas no coinciden.";
    if (!mail.trim() || !emailRegex.test(mail))
      newErrors.mail = "Por favor ingresa un correo válido.";
    if (!nombres.trim()) newErrors.nombres = "El nombre es obligatorio.";
    if (!apellido.trim()) newErrors.apellido = "El apellido es obligatorio.";
   // if (!fechaNac.trim() || isNaN(fechaNac) || fechaNac <= 0)
    //  newErrors.fechaNac = "Por favor ingresa una fechaNac válida.";

    setErrors(newErrors);
    console.log(newErrors);

    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const enviarRegistro = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    fetch("http://127.0.0.1:5000/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        pwd: password,
        fechaNac: new Date(fechaNac),
        email: mail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccessMessage("Registro exitoso. Bienvenido!");
        setUser("");
        setPassword("");
        setRewpassword("");
        setMail("");
        setNombres("");
        setApellido("");
        setFechaNac("");
        setErrors({});
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
        setSuccessMessage("");
        alert("Error al registrar. Intenta nuevamente.");
      });
  };

  return (
    <div className="register-container">
      <form className="formRegister" onSubmit={enviarRegistro}>
        <div>
          <label className="labelForm">Usuario</label>
          <input
            type="text"
            placeholder={errors.user || "Usuario"}
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className={errors.user ? "input-error" : ""}
          />
          {errors.user && <p className="advertencia">{errors.user}</p>}
        </div>
        <div>
          <label className="labelForm">Contraseña</label>
          <input
            type="password"
            placeholder={errors.password || "Contraseña"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <p className="advertencia">{errors.password}</p>}
        </div>
        <div>
          <label className="labelForm">Repetir Contraseña</label>
          <input
            type="password"
            placeholder={errors.password || "Repetir Contraseña"}
            value={rewpassword}
            onChange={(e) => setRewpassword(e.target.value)}
            className={errors.password ? "input-error" : ""}
          />
          {errors.rewpassword && (
            <p className="advertencia">{errors.rewpassword}</p>
          )}
        </div>
        <div>
          <label className="labelForm">Mail</label>
          <input
            type="email"
            placeholder={errors.mail || "Mail"}
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className={errors.mail ? "input-error" : ""}
          />
          {errors.mail && <p className="advertencia">{errors.mail}</p>}
        </div>
        <div>
          <label className="labelForm">Nombre/s</label>
          <input
            type="text"
            placeholder={errors.nombres || "Nombre"}
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            className={errors.nombres ? "input-error" : ""}
          />
          {errors.nombres && <p className="advertencia">{errors.nombres}</p>}
        </div>
        <div>
          <label className="labelForm">Apellido</label>
          <input
            type="text"
            placeholder={errors.apellido || "Apellido"}
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className={errors.apellido ? "input-error" : ""}
          />
          {errors.apellido && <p className="advertencia">{errors.apellido}</p>}
        </div>
        <div>
          <label className="labelForm">Fecha de Nacimiento</label>
          <input
            type="date"
            placeholder={errors.fechaNac || "Fecha de Nacimiento"}
            value={fechaNac}
            onChange={(e) => setFechaNac(e.target.value)}
            className={errors.fechaNac ? "input-error" : ""}
          />
          {errors.fechaNac && <p className="advertencia">{errors.fechaNac}</p>}
        </div>
        {successMessage && (
          <p className="formulario__mensaje-exito__activo">{successMessage}</p>
        )}
        <button className="boton" type="submit">
          Registrarse
        </button>
          <div>
            <p className="message">¿Ya tiene una cuenta? <a href="login" id="crearCuenta">Logearse</a></p>
          </div>
      </form>
    </div>
  );
}

export default Register;

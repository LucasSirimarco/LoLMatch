import './login.css'
import { useState } from 'react'
import Cookies from "universal-cookie"
import { Navigate, useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [boleanToken, setBoleanToken] = useState(false);
  const cookies = new Cookies();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (!validateEmail(mail)) {
      console.log('El email no es válido.');
      alert('El email no es válido.')
      return;
  }
  if (password.length < 3) {
      console.log('La contraseña debe tener al menos 3 caracteres.');
      alert('La contraseña debe tener al menos 3 caracteres.')
      return;
  }
  fetch("http://127.0.0.1:4010/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ mail, password }),
})
    .then((res) => res.json())
    .then((data) => {
        if (data) {
            console.log("ttttttttttttttttttttttttttttttttttttttttttttt");
            console.log(data);
            cookies.set("Token", data, { path: "/", secure: true, sameSite: "strict" });
            console.log("Token guardado en las cookies:", data);
            
            navigate("/home");
        } else {
            console.log(data);
            alert("Usuario o contraseña incorrectos.")
            console.log("Usuario o contraseña incorrectos.");
            
        }
    })
    .catch((error) => {
        console.error("Error al iniciar sesión:", error);
        
    });
};


return(
    
    <div className="loginContainer">
          <form className="formContainer" name="sendMessage" id="contactForm" method="GET" action="/http://127.0.0.1:4010/login">
          <div>
              <label className="labelForm">Email</label>
                <div>
                  <input type="text" placeholder='Email' value={mail} onChange={e => setMail(e.target.value)} />
                </div>
              <p className="advertencia">Email Incorrecto</p>
          </div>
          <div >
              <label htmlFor="password" className="labelForm" >Contraseña</label>
              <div >
                <input type="password" placeholder='Contraseña'  value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <p className="advertencia">La contraseña debe contener al menos 6 carácteres</p>
          </div>
          <div className="advertenciaLogin"id="advertenciaLogin">
                  <p className="advertencia">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <b>Error: </b>Complete los campos.</p>
          </div>
          <div className='sessionMaintenance' >
                <input className='labelcheckbox' type="checkbox" />
                <label className='labelSession'> Mantener sesion iniciada</label>
          </div>
          <div >
                { boleanToken ? <Navigate to="/home"/>:<button className="boton" type="submit" onClick={enviarFormulario} >Ingresar</button>}
                <p><b>El Formulario se envio correctamente</b></p>
          </div>
          <div>
            <p className="message">¿No está registrado? <a href="register" id="crearCuenta">Crear una cuenta</a></p>
          </div>
      </form>
      
    </div>
    
)
}

export default Login
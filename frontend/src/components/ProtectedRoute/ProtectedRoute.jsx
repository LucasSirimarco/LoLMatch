import Cookies from "universal-cookie";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Añadir esta línea

const ProtectedRoute = ({ element }) => {
    const cookies = new Cookies();
    const token = cookies.get("Token"); // Obtener el token
    const navigate = useNavigate();  // Asegúrate de declarar useNavigate aquí
  
    useEffect(() => {
      if (!token) {
        // Si no hay token, redirigir al login
        navigate('/login');
      }
    }, [token, navigate]); // Si el token cambia, realiza la verificación
  
    if (token) {
      return element;
    } else {
      return null; // Esto se renderiza si no hay token, es decir, no muestra la ruta protegida
    }
  };
  
  export default ProtectedRoute;

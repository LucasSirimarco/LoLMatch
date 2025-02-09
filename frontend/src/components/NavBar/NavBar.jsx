import "./navBar.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import PreHome from "../PreHome/PreHome";


const NavBar = () => {
  return (
    <div>
      <header className="navBar">
      <div className="logo">
        <h1>LoL Match</h1>
        <p>Encuentra tu compañero ideal en la Grieta del Invocador</p>
      </div>
      <nav>
        <Link className="links" to="/login">
          Login
        </Link>
        <Link className="links" to="/register">
          Register
        </Link>
      </nav>
    </header>
    <PreHome />
    <Footer />

    </div>
    

  );
};

export default NavBar;

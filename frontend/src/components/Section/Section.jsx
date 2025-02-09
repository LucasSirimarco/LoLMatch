import "./section.css";
import BarraDeBusqueda from "../BarraSearch/BarraSearch";
import image from "./images/d.jpg";
import CarousellTwitch from "../CarrusellTwich/CarrusellTwich";


const Section = () => {
  return (
    <div className="section">
      <div className="container-image">
        <img src={image} alt="jynx" />
      </div>
      <h2>Bienvenidos a LoLMatch</h2>
      <BarraDeBusqueda />
      {/* 
      <div className="carrusell-streaming">
        <CarousellTwitch />
      </div>
      */}
    </div>
  );
};

export default Section;

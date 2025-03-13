import "./asideRigth.css";
import image from "./images/a.jpg";

const AsideRigth = () => {
  return (

    <div className="aside-rigth">
      <div className="ads-container">
              <img src={ image } alt="Publicidad" className="aside-ads"/>
            </div>
            <div className="ads-container">
              <img src={ image } alt="Publicidad" className="aside-ads"/>
            </div>
            <div className="ads-container">
              <img src={ image } alt="Publicidad" className="aside-ads"/>
            </div>
            <div className="ads-container">
              <img src={ image } alt="Publicidad" className="aside-ads"/>
            </div>
            <div className="ads-container">
              <img src={ image } alt="Publicidad" className="aside-ads"/>
            </div>
    </div>
  
  )
};

export default AsideRigth;

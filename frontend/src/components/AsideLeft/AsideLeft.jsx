import "./asideLeft.css";
import image from "./images/a.jpg";


const AsideLeft = () => {
  return (

    <div className="aside-left">
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

export default AsideLeft;

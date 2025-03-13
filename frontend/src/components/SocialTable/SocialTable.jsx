import React from "react";
import { FaEnvelope, FaInstagram, FaTwitch, FaTwitter, FaFacebook, FaWhatsapp, FaTelegram, FaDiscord, FaReddit } from "react-icons/fa";
import "./socialTable.css"; // Agrega estilos para la tabla

const contactLinks = {
  email: "mailto:summoner123@email.com",
  instagram: "https://www.instagram.com/tu_perfil",
  twitch: "https://www.twitch.tv/tu_canal",
  twitter: "https://twitter.com/tu_perfil",
  facebook: "https://www.facebook.com/tu_perfil",
  whatsapp: "https://wa.me/tu_numero",
  telegram: "https://t.me/tu_usuario",
  discord: "https://discord.com/users/tu_id",
  reddit: "https://www.reddit.com/user/tu_usuario",
};

function SocialTable() {
  return (
    <div className="social-table-container">
      <table className="social-table">
        <tbody>
          <tr>
            <td><a href={contactLinks.email} target="_blank" rel="noopener noreferrer"><FaEnvelope className="icon" /></a></td>
            <td><a href={contactLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a></td>
            <td><a href={contactLinks.twitch} target="_blank" rel="noopener noreferrer"><FaTwitch className="icon" /></a></td>
          </tr>
          <tr>
            <td><a href={contactLinks.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a></td>
            <td><a href={contactLinks.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook className="icon" /></a></td>
            <td><a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp className="icon" /></a></td>
          </tr>
          <tr>
            <td><a href={contactLinks.telegram} target="_blank" rel="noopener noreferrer"><FaTelegram className="icon" /></a></td>
            <td><a href={contactLinks.discord} target="_blank" rel="noopener noreferrer"><FaDiscord className="icon" /></a></td>
            <td><a href={contactLinks.reddit} target="_blank" rel="noopener noreferrer"><FaReddit className="icon" /></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SocialTable;

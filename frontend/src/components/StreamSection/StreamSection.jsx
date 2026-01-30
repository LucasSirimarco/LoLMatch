import React from "react";
import "./StreamSection.css";

const StreamSection = () => {
  return (
    <section className="stream-section">
      {/* Encabezado */}
      <header className="stream-header">
        <h2>🎥 Transmisión en Vivo</h2>
        <button className="btn-live">En vivo</button>
      </header>

      <div className="stream-content">
        {/* Video principal */}
        <div className="stream-video">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Streaming"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Chat lateral */}
        <aside className="stream-chat">
          <h3>💬 Chat</h3>
          <div className="chat-box">
            <p><strong>Usuario1:</strong> Hola! 👋</p>
            <p><strong>Usuario2:</strong> Tremenda transmisión 🔥</p>
            <p><strong>Usuario3:</strong> Saludos desde Argentina 🇦🇷</p>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Escribe un mensaje..." />
            <button>Enviar</button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default StreamSection;

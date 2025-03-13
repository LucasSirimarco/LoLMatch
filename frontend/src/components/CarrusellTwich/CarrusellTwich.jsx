import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

const CarousellTwitch = () => {
  const [streams, setStreams] = useState([]);
  const CLIENT_ID = "TU_CLIENT_ID"; // Reemplaza con tu Client ID
  const CLIENT_SECRET = "TU_CLIENT_SECRET"; // Reemplaza con tu Client Secret
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // Obtener el token de acceso de Twitch
    const fetchAccessToken = async () => {
      const response = await axios.post(
        "https://id.twitch.tv/oauth2/token",
        null,
        {
          params: {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: "client_credentials",
          },
        }
      );
      setAccessToken(response.data.access_token);
    };

    fetchAccessToken();
  }, [CLIENT_ID, CLIENT_SECRET]);

  useEffect(() => {
    if (accessToken) {
      // Obtener las transmisiones en vivo más populares
      const fetchStreams = async () => {
        const response = await axios.get(
          "https://api.twitch.tv/helix/streams",
          {
            headers: {
              "Client-ID": CLIENT_ID,
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              first: 10, // Número de transmisiones a mostrar
            },
          }
        );
        setStreams(response.data.data);
      };

      fetchStreams();
    }
  }, [accessToken, CLIENT_ID]);

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="twitch-carousel">
      <h2 className="text-center text-xl font-bold mb-4">
        Streams en Vivo en Twitch
      </h2>
      {streams.length > 0 ? (
        <Slider {...settings}>
          {streams.map((stream) => (
            <div key={stream.id} className="stream-card p-4">
              <a
                href={`https://www.twitch.tv/${stream.user_login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center"
              >
                <img
                  src={stream.thumbnail_url
                    .replace("{width}", "320")
                    .replace("{height}", "180")}
                  alt={stream.title}
                  className="rounded-lg shadow-md"
                />
                <h3 className="mt-2 text-lg font-semibold">
                  {stream.user_name}
                </h3>
                <p className="text-sm text-gray-600">{stream.game_name}</p>
                <p className="text-sm text-gray-600">
                  {stream.viewer_count} espectadores
                </p>
              </a>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">Cargando transmisiones...</p>
      )}
    </div>
  );
};

export default CarousellTwitch;

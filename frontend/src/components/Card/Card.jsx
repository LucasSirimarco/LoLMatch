import { useState } from "react";
import { motion } from 'framer-motion';
import { useAnimationControls } from 'framer-motion';
import "./card.css";

const Card = ({ player }) => {
  const controls = useAnimationControls();
  const [swiped, setSwiped] = useState(false);

  const handleSwipe = async (direction) => {
    await controls.start({ x: direction === "right" ? 300 : -300, opacity: 0 });
    setSwiped(true);
  };

  if (swiped) return null;

  return (
    <motion.div
      className="card"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      animate={controls}
      onDragEnd={(event, info) => {
        if (info.offset.x > 100) handleSwipe("right");
        if (info.offset.x < -100) handleSwipe("left");
      }}
    >
      <img src={player.profilePic} alt={player.name} className="profile-pic" />
      <div className="card-info">
        <h2>{player.name}, {player.age}</h2>
        <p><strong>Rango:</strong> {player.rank}</p>
        <p><strong>Main:</strong> {player.mainChamps.join(", ")}</p>
        <p><strong>Carril:</strong> {player.lanes.join(", ")}</p>
        <p><strong>Servidor:</strong> {player.server}</p>
      </div>
      <div className="card-ejecute">
        <button className="button-card">&#10060;</button>
        <button className="button-card">&#10084;</button>
      </div>
    </motion.div>
  );
};

export default Card;

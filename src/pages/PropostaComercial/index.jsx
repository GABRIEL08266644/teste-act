import { useState } from "react";

import data from "../../data/propostas.json";
import Card from "../../components/Card";

import "./PropostaComercial.css";

export const PropostaComercial = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="container-proposta">
      {data.map((item, index) => (
        <div
          key={item.id}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <Card data={item} isHovered={hovered === index} />
        </div>
      ))}
    </div>
  );
};

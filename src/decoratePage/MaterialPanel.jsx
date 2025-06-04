import decoItems from "../data/decoItems";
import MaterialItem from "./MaterialItem";
import { useState } from "react";

export default function MaterialPanel({ onAdd }) {
  const [activeCategory, setActiveCategory] = useState("albums");

  return (
    <div className="material-panel">
      {decoItems[activeCategory].map((item) => (
        <MaterialItem
          key={item.id}
          name={item.name}
          src={item.src}
          onClick={() => onAdd(item)}
        />
      ))}
    </div>
  );
}

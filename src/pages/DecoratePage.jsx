import { useState } from "react";
import MaterialPanel from "../decoratePage/MaterialPanel";
import Toolbar from "../decoratePage/Toolbar";

export default function DecoratePage() {
  const [canvasItems, setCanvasItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("albums");

  // 加到畫布中央的動作
  const handleAddToCanvas = (item) => {
    const newItem = {
      ...item,
      x: 200, // 你可以用 fixed 位置起始
      y: 200,
    };
    setCanvasItems((prev) => [...prev, newItem]);
  };

  // toolbar的category
   const categories = [
    { id: "FacialExpression", name: "FacialExpression", icon: "./images/decorate-icons/icon-facial.svg" },
    { id: "Accessory", name: "Accessory", icon: "./images/decorate-icons/icon-accessory.svg" },
    { id: "BirthdayMerch", name: "BirthdayMerch", icon: "./images/decorate-icons/icon-birthday.svg" },
    { id: "Albums", name: "Albums", icon: "./images/decorate-icons/icon-album.svg" },
    { id: "Posters", name: "Posters", icon: "./images/decorate-icons/icon-poster.svg" },
    { id: "Others", name: "Others", icon: "./images/decorate-icons/icon-others.svg" },
  ];

  return (
    <div className="decorate-page">
      <Toolbar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <MaterialPanel onAdd={handleAddToCanvas} />
      {/* 將 canvasItems 渲染在畫布區 */}
    </div>
  );
}

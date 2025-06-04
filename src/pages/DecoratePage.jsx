import { useState } from "react";
import MaterialPanel from "../decoratePage/MaterialPanel";
import Toolbar from "../decoratePage/Toolbar";
import decoItems from "../data/decoItems";

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
    { id: "facialExpression", name: "FacialExpression", icon: "./images/decorate-icons/icon-facial.svg" },
    { id: "accessories", name: "Accessory", icon: "./images/decorate-icons/icon-accessory.svg" },
    { id: "birthday", name: "BirthdayMerch", icon: "./images/decorate-icons/icon-birthday.svg" },
    { id: "albums", name: "Albums", icon: "./images/decorate-icons/icon-album.svg" },
    { id: "posters", name: "Posters", icon: "./images/decorate-icons/icon-poster.svg" },
    { id: "others", name: "Others", icon: "./images/decorate-icons/icon-others.svg" },
  ];

  return (
    <div className="decorate-page">
      <Toolbar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
       {/* 這是中央畫布，之後 Day 4 我們會來處理 */}
      <div className="canvas-area">這裡是畫布區</div>

      <MaterialPanel
        category={activeCategory}
        onAdd={handleAddToCanvas}
        items={decoItems[activeCategory] || []}
      />
    </div>
  );
}

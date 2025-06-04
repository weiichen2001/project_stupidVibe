import { useEffect, useRef, useState } from "react";
import MaterialPanel from "../decoratePage/MaterialPanel";
import Toolbar from "../decoratePage/Toolbar";
import decoItems from "../data/decoItems";

export default function DecoratePage() {
  const [canvasItems, setCanvasItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const panelRef = useRef(null); // ⭐ 加上 ref 用來偵測是否點在外部

  // ⭐ 點擊 panel 外部就關閉
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setActiveCategory(null);
      }
    };

    if (activeCategory) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeCategory]);

  // 加到畫布中央的動作
  const handleAddToCanvas = (item) => {
    const newItem = {
      ...item,
      x: 200,
      y: 200,
    };
    setCanvasItems((prev) => [...prev, newItem]);
  };

  // toolbar 的 category 清單
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

      {/* 中央畫布，Day 4 會來處理 */}
      <div className="canvas-area">這裡是畫布區</div>

      {/* 點分類才出現貼紙面板，並掛 ref */}
      {activeCategory && (
        <MaterialPanel
          ref={panelRef} // ⭐ 傳入 ref
          category={activeCategory}
          onAdd={handleAddToCanvas}
          items={decoItems[activeCategory] || []}
        />
      )}
    </div>
  );
}

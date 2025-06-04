import { useEffect, useRef, useState } from "react";
import MaterialPanel from "../decoratePage/MaterialPanel";
import Toolbar from "../decoratePage/Toolbar";
import decoItems from "../data/decoItems";

export default function DecoratePage() {
  const [canvasItems, setCanvasItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const panelRef = useRef(null);
  const toolbarRef = useRef(null); // 新增 toolbar 的 ref

  // 點擊 panel + toolbar 以外區域，關閉面板
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsidePanel =
        panelRef.current && !panelRef.current.contains(event.target);
      const clickedOutsideToolbar =
        toolbarRef.current && !toolbarRef.current.contains(event.target);

      if (clickedOutsidePanel && clickedOutsideToolbar) {
        setActiveCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 將貼紙加到畫布中央（暫時固定位置）
  const handleAddToCanvas = (item) => {
    const newItem = {
      ...item,
      x: 200,
      y: 200,
    };
    setCanvasItems((prev) => [...prev, newItem]);
  };

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
      {/* 包住 toolbar 並掛 ref */}
      <div ref={toolbarRef}>
        <Toolbar
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={(categoryId) => {
            setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
          }}
        />
      </div>

      {/* 中央畫布區 */}
      <div className="canvas-area">這裡是畫布區</div>

      {/* 貼紙面板 + 掛上 ref */}
      {activeCategory && (
        <MaterialPanel
          ref={panelRef}
          category={activeCategory}
          onAdd={handleAddToCanvas}
          items={decoItems[activeCategory] || []}
        />
      )}
    </div>
  );
}

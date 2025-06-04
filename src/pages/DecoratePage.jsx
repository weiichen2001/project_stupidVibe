import { useEffect, useRef, useState } from "react";
import MaterialPanel from "../decoratePage/MaterialPanel";
import Toolbar from "../decoratePage/Toolbar";
import decoItems from "../data/decoItems";

export default function DecoratePage() {
  const [canvasItems, setCanvasItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [panelStyle, setPanelStyle] = useState({}); // ⭐ 動態樣式

  const panelRef = useRef(null);
  const buttonRefs = useRef({}); // ⭐ 儲存每個分類按鈕的 ref

  // 點擊 panel + 按鈕以外區域，關閉面板
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsidePanel =
        panelRef.current && !panelRef.current.contains(event.target);

      const clickedOutsideAnyButton =
        !Object.values(buttonRefs.current).some((btn) =>
          btn?.contains(event.target)
        );

      if (clickedOutsidePanel && clickedOutsideAnyButton) {
        setActiveCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 設定面板位置
  useEffect(() => {
    if (activeCategory && buttonRefs.current[activeCategory]) {
      const buttonEl = buttonRefs.current[activeCategory];
      const rect = buttonEl.getBoundingClientRect();
      setPanelStyle({
        position: "absolute",
        top: `${rect.top - 14}px`, // ⭐ 垂直置中微調（180 是半高）
        left: `${rect.right + 8}px`, // ⭐ 貼齊右邊，加入間距
        zIndex: 10,
      });
    }
  }, [activeCategory]);

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
      <Toolbar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={(categoryId) => {
          setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
        }}
        buttonRefs={buttonRefs} // ⭐ 傳入 refs
      />

      <div className="canvas-area">這裡是畫布區</div>

      {activeCategory && (
        <MaterialPanel
          ref={panelRef}
          category={activeCategory}
          onAdd={handleAddToCanvas}
          items={decoItems[activeCategory] || []}
          style={panelStyle} // ⭐ 傳入動態位置樣式
        />
      )}
    </div>
  );
}

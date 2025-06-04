import { useState } from "react";
import MaterialPanel from "../decoratePage/MaterialPanel";

export default function DecoratePage() {
  const [canvasItems, setCanvasItems] = useState([]);

  // 加到畫布中央的動作
  const handleAddToCanvas = (item) => {
    const newItem = {
      ...item,
      x: 200, // 你可以用 fixed 位置起始
      y: 200,
    };
    setCanvasItems((prev) => [...prev, newItem]);
  };

  return (
    <div className="decorate-page">
      <MaterialPanel onAdd={handleAddToCanvas} />
      {/* 將 canvasItems 渲染在畫布區 */}
    </div>
  );
}

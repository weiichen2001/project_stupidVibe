// CustomShelfCanvas.jsx
import React, { useRef, useContext } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
// 取得放置的 item 清單、移動 item 的方法、移除全部 item 的方法
import { LayoutContext } from "./context";

export default function CustomShelfCanvas() {
  const canvasRef = useRef(null);
  const { placedItems, moveItem, removeItem, clearAll } = useContext(LayoutContext);

  const handleDownload = async () => {
    if (!canvasRef.current) return;
    const canvas = await html2canvas(canvasRef.current);
    const link = document.createElement("a");
    link.download = "my-layout.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="canvas-wrapper">
      <div className="canvas-controls">
        <button onClick={handleDownload}>匯出圖片</button>
        <button onClick={clearAll}>清除所有素材</button>
      </div>

      <div className="canvas-area" ref={canvasRef}
        style={{
          position: "relative", width: "100%", height: "600px", 
          background: "#fefcf7", 
          backgroundColor: "rgba(0, 255, 0, 0.1)", // 淺綠色背景
          border: "1px dashed green",             // 虛線邊框
          zIndex:"-1"
        }}>
        {placedItems.map((item) => (
          <motion.img
            key={item.id}
            src={item.src}
            drag
            dragMomentum={false}
            onDragEnd={(e, info) => {
              const newX = info.point.x;
              const newY = info.point.y;
              moveItem(item.id, { top: newY, left: newX });
            }}
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              top: item.position.top,
              left: item.position.left,
              cursor: "move",
            }}
          />
        ))}
      </div>
    </div>
  );
}

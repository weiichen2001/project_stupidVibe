// CustomShelfCanvas.jsx
import  { useRef, useContext } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
// 取得放置的 item 清單、移動 item 的方法、移除全部 item 的方法
import { LayoutContext } from "./context";

export default function CustomShelfCanvas() {
  const canvasRef = useRef(null); //抓住畫布這塊區域，等等匯出圖片會用
  const { placedItems, moveItem, removeItem, clearAll } = useContext(LayoutContext);

  const handleDownload = async () => {
    if (!canvasRef.current) return;
    const canvas = await html2canvas(canvasRef.current);
    const link = document.createElement("a");
    link.download = "my-room.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="canvas-wrapper">
      {/* 按鈕區 */}
      {/* <div className="canvas-controls">
        <button onClick={handleDownload}>匯出圖片</button>
        <button onClick={clearAll}>清除所有素材</button>
      </div> */}

    {/* 畫布本人 */}
      <div className="canvas-area" ref={canvasRef}>
        <figure className="hoshi-sitting">
          <img src="./images/decorate-canvas/sitting-blank-face.png" alt="hoshi-sitting-blank-face" />
        </figure>
        <div className="wood-shelf">
          <img src="./images/decorate-canvas/wood-01.svg" alt="wood-01" className="wood1" />
          <img src="./images/decorate-canvas/wood-02.svg" alt="wood-02" className="wood2" />
        </div>
        <figure className="board-container">
          <img src="./images/decorate-canvas/board.png" alt="" className="board" />
        </figure>
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

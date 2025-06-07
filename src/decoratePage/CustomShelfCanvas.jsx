import { useContext } from "react";
import { motion } from "framer-motion";
import { LayoutContext } from "./context";

export default function CustomShelfCanvas({ canvasRef }) {
  const { placedItems, moveItem, removeItem, clearAll } = useContext(LayoutContext);

  return (
    <div className="canvas-wrapper">
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

        {/* 渲染貼紙 */}
        {placedItems.map((item) => (
          <motion.img
            key={item.id}
            src={item.src}
            drag
            dragMomentum={false}
            onDragEnd={(e, info) => {
              const canvas = canvasRef.current;
              if (!canvas) return;

              const canvasRect = canvas.getBoundingClientRect();
              const newX = ((info.point.x - canvasRect.left) / canvasRect.width) * 100;
              const newY = ((info.point.y - canvasRect.top) / canvasRect.height) * 100;

              moveItem(item.id, { top: newY, left: newX });
            }}
            style={{
              position: "absolute",
              width: `${item.widthRatio * 100}%`,
              height: "auto",
              top: `${item.position.top}%`,
              left: `${item.position.left}%`,
              transform: "translate(-50%, -50%)",
              cursor: "move",
            }}
          />
        ))}
      </div>
    </div>
  );
}

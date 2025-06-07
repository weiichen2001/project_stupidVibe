import React, { useContext, useRef } from "react";
import Draggable from "react-draggable";
import { LayoutContext } from "./context";

export default function CustomShelfCanvas({ canvasRef }) {
  const { placedItems, moveItem } = useContext(LayoutContext);

  // 1. 建立 nodeRefs ref 陣列
  const nodeRefs = useRef([]);

  // 2. 每次 render 時確保 ref 長度對齊
  if (nodeRefs.current.length !== placedItems.length) {
    nodeRefs.current = placedItems.map((_, i) => nodeRefs.current[i] || React.createRef());
  }

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
          <img src="./images/decorate-canvas/board.png" alt="board" className="board" />
        </figure>

        {/* 渲染貼紙 */}
        {placedItems.map((item, index) => {
          const ref = nodeRefs.current[index];

          const canvasWidth = canvasRef.current?.offsetWidth || 0;
          const canvasHeight = canvasRef.current?.offsetHeight || 0;

          const posX = (item.position.left / 100) * canvasWidth;
          const posY = (item.position.top / 100) * canvasHeight;

          return (
            <Draggable
              key={item.id}
              nodeRef={ref}
              defaultPosition={{ x: posX, y: posY }}
              onStop={(e, data) => {
                const canvas = canvasRef.current;
                if (!canvas) return;

                const canvasRect = canvas.getBoundingClientRect();
                const newLeft = (data.x + data.node.offsetWidth / 2) / canvasRect.width * 100;
                const newTop = (data.y + data.node.offsetHeight / 2) / canvasRect.height * 100;

                moveItem(item.id, { top: newTop, left: newLeft });
              }}
            >
              <div
                ref={ref}
                style={{
                  position: "absolute",
                  width: `${item.widthRatio * 100}%`,
                }}
              >
                <img
                  src={item.src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                    cursor: "move",
                  }}
                />
              </div>
            </Draggable>
          );
        })}


      </div>
    </div>
  );
}

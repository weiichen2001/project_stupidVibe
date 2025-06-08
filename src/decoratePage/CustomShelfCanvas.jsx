import React, { useContext, useRef, useEffect, useState } from "react";
import { LayoutContext } from "./context";

export default function CustomShelfCanvas({ canvasRef }) {
  const { placedItems, moveItem, removeItem, faceSrc } = useContext(LayoutContext);
  const dragRefs = useRef({}); // 儲存每張貼紙的 DOM 與拖曳狀態
  const [selectedId, setSelectedId] = useState(null);


  // 註冊滑鼠事件：拖曳中移動與結束
  useEffect(() => {

    const handleMouseMove = (e) => {
      const dragging = dragRefs.current.dragging;
      if (!dragging) return;

      const { id, offsetX, offsetY } = dragging;
      const canvas = canvasRef.current;
      const canvasRect = canvas.getBoundingClientRect();
      const itemEl = dragRefs.current[id];
      if (!itemEl) return;

      const itemWidth = itemEl.offsetWidth;
      const itemHeight = itemEl.offsetHeight;

      // 滑鼠相對畫布的位置
      let mouseX = e.clientX - canvasRect.left;
      let mouseY = e.clientY - canvasRect.top;

      // 將滑鼠位置限制在「貼紙中心點」不能超出邊界
      mouseX = Math.max(itemWidth / 2, Math.min(mouseX, canvasRect.width - itemWidth / 2));
      mouseY = Math.max(itemHeight / 2, Math.min(mouseY, canvasRect.height - itemHeight / 2));

      // 換算成百分比位置（中心點）
      const newLeft = (mouseX / canvasRect.width) * 100;
      const newTop = (mouseY / canvasRect.height) * 100;

      moveItem(id, { top: newTop, left: newLeft });
    };


    const handleMouseUp = () => {
      dragRefs.current.dragging = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [moveItem, canvasRef]);

  useEffect(() => {
    console.log("目前貼紙內容 placedItems：", placedItems);
  }, [placedItems]);


  // 滑鼠按下時啟動拖曳
  const handleMouseDown = (e, item) => {
    const canvas = canvasRef.current;
    const canvasRect = canvas.getBoundingClientRect();

    const mouseX = e.clientX - canvasRect.left;
    const mouseY = e.clientY - canvasRect.top;

    const itemX = (item.position.left / 100) * canvasRect.width;
    const itemY = (item.position.top / 100) * canvasRect.height;

    const offsetX = mouseX - itemX;
    const offsetY = mouseY - itemY;

    dragRefs.current.dragging = {
      id: item.id,
      offsetX,
      offsetY,
    };
  };

  return (
    <div className="canvas-wrapper">
      <div className="canvas-area"
        ref={canvasRef}
        onMouseDown={(e) => {
          // 如果點的是畫布本身（而不是貼紙）
          if (!e.target.closest(".sticker-item")) {
            setSelectedId(null);
          }
        }}>
        {/* 背景角色 */}
        <figure className="hoshi-sitting" >
          <img
            src="./images/decorate-canvas/sitting-blank-face.png"
            alt="hoshi-sitting-blank-face"
          />

          {/*加上固定臉的圖 */}
          <div
            className="face-sticker"
          >
            <img
              src={faceSrc}
              alt="hoshi-face"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </figure>


        {/* 木板架 */}
        <div className="wood-shelf">
          <img
            src="./images/decorate-canvas/wood-01.svg"
            alt="wood-01"
            className="wood1"
          />
          <img
            src="./images/decorate-canvas/wood-02.svg"
            alt="wood-02"
            className="wood2"
          />
        </div>

        {/* 黑板 */}
        <figure className="board-container">
          <img
            src="./images/decorate-canvas/board.png"
            alt="board"
            className="board"
          />
        </figure>

        {/* 渲染貼紙 */}
        {placedItems.map((item) => (
          <div
            className="sticker-item"
            key={item.id}
            ref={(el) => (dragRefs.current[item.id] = el)}
            onMouseDown={(e) => {
              handleMouseDown(e, item);
              setSelectedId(item.id);
            }}
            style={{
              position: "absolute",
              top: `${item.position.top}%`,
              left: `${item.position.left}%`,
              width: `${item.widthRatio * 100}%`,
              transform: "translate(-50%, -50%)",
              cursor: "move",
            }}
          >
            <img
              src={item.src}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                pointerEvents: "none", // 讓圖片不阻擋拖曳行為
              }}
            />
            {selectedId === item.id && (
              <button
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  dragRefs.current.dragging = null;
                  removeItem(item.id);
                  setSelectedId(null);
                }}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  fontSize: "14px",
                  cursor: "pointer",
                  zIndex: 10,
                }}
              >
                ×
              </button>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

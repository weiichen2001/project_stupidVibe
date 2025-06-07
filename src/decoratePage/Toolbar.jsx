import  { useRef,useContext } from "react";
import { LayoutContext } from "./context";
import html2canvas from "html2canvas";

export default function Toolbar({ categories, activeCategory, onSelectCategory, buttonRefs,canvasRef }) {
  const { clearAll } = useContext(LayoutContext);
  const handleDownload = async () => {
    if (!canvasRef.current) return;
    const canvas = await html2canvas(canvasRef.current);
    const link = document.createElement("a");
    link.download = "my-room.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  
  return (
    <div className="toolbar">
      {/* 類別按鈕群組 */}
      {categories.map((category) => (
        <button
          key={category.id}
          ref={(el) => {
            buttonRefs.current[category.id] = el; // ⭐ 將 DOM 存入對應分類 ID
          }}
          className={`toolbar-btn ${activeCategory === category.id ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation(); // 避免被外部偵測到關閉
            onSelectCategory(category.id);
          }}
        >
          <img src={category.icon} alt={category.name} />
        </button>
      ))}

      {/* 重新整理按鈕 */}
      <button
        className="reload-btn"
        // onClick={(e) => e.stopPropagation()}
        onClick={clearAll}

      >
        <img src="./images/decorate-icons/icon-reload.svg" alt="icon-reload" />
      </button>

      {/* 下載按鈕 */}
      <button
        className="download-btn"
        // onClick={(e) => e.stopPropagation()}
        onClick={handleDownload}
      >
        <img src="./images/decorate-icons/icon-download.svg" alt="icon-download" />
      </button>
    </div>
  );
}

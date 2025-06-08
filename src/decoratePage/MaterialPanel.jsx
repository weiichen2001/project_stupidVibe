import { useState, forwardRef, useContext } from "react";
import MaterialItem from "./MaterialItem";
import { LayoutContext } from "./context";

// forwardRef：讓父層可用 ref 偵測點擊外部關閉面板
const MaterialPanel = forwardRef(({ items, style, category }, ref) => {
  const ITEMS_PER_PAGE = 8;
  const [page, setPage] = useState(0);


  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const currentItems = items.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  // 自動補足空格，讓一頁永遠顯示 8 格（有可能是空的）
  const placeholders = Array.from({ length: ITEMS_PER_PAGE - currentItems.length });

  const { addItem, updateFaceSticker } = useContext(LayoutContext); // 從 context 取出 addItem
  const handleAdd = (item) => {
    if (category === 'facialExpression') {
      updateFaceSticker(item.src);
    } else {
      addItem(item);
    }
  };


  return (
    <div className={`material-panel category-${category}`} ref={ref} style={style}>
      <div className="material-grid">
        {currentItems.map((item) => (
          <MaterialItem
            key={item.id}
            name={item.name}
            src={item.src}
            onClick={() => handleAdd(item)}
          />
        ))}
        {placeholders.map((_, i) => (
          <div key={`placeholder-${i}`} className="material-placeholder" />
        ))}
      </div>

      {/* 分頁按鈕 */}
      {totalPages > 1 && (
        <div className="pagination">
          {/* 上一頁 */}
          {page > 0 ? (
            <button onClick={() => setPage(page - 1)}>
              <img src="./images/decorate-icons/icon-prev.svg" alt="icon-prev" />
            </button>
          ) : (
            <button className="invisible" />
          )}

          {/* 下一頁 */}
          {page < totalPages - 1 ? (
            <button onClick={() => setPage(page + 1)}>
              <img src="./images/decorate-icons/icon-next.svg" alt="icon-next" />
            </button>
          ) : (
            <button className="invisible" />
          )}
        </div>
      )}
    </div>
  );
});

export default MaterialPanel;

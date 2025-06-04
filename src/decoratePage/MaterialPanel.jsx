import { useState, forwardRef } from "react";
import MaterialItem from "./MaterialItem";

// ⭐ 用 forwardRef 包裝這個元件，這樣父層就可以傳 ref 進來
const MaterialPanel = forwardRef(({ items, onAdd }, ref) => {
  const ITEMS_PER_PAGE = 8;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const currentItems = items.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  // ⭐ 自動補足空格，讓一頁永遠顯示 8 格（有可能是空的）
  const placeholders = Array.from({ length: ITEMS_PER_PAGE - currentItems.length });

  return (
    <div className="material-panel" ref={ref}>
      <div className="material-grid">
        {currentItems.map((item) => (
          <MaterialItem
            key={item.id}
            name={item.name}
            src={item.src}
            onClick={() => onAdd(item)}
          />
        ))}
        {placeholders.map((_, i) => (
          <div key={`placeholder-${i}`} className="material-placeholder" />
        ))}
      </div>

      {/* ⭐ 上下頁按鈕 */}
      {totalPages > 1 && (
        <div className="pagination">
          {page > 0 ? (
            <button onClick={() => setPage(page - 1)}>
              <img src="./images/decorate-icons/icon-prev.svg" alt="icon-prev" />
            </button>
          ) : (
            <button className="invisible"></button>
          )}

          {page < totalPages - 1 ? (
            <button onClick={() => setPage(page + 1)}>
              <img src="./images/decorate-icons/icon-next.svg" alt="icon-next" />
            </button>
          ) : (
            <button className="invisible"></button>
          )}
        </div>
      )}
    </div>
  );
});

export default MaterialPanel;

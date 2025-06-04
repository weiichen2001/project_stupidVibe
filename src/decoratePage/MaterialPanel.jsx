import { useState } from "react";
import MaterialItem from "./MaterialItem";

export default function MaterialPanel({ items, onAdd }) {
  const ITEMS_PER_PAGE = 8;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const currentItems = items.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  // 計算這一頁的空格補幾個
  const placeholders = Array.from({ length: ITEMS_PER_PAGE - currentItems.length });

  return (
    <div className="material-panel">
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

      {/* 上下頁按鈕 */}
      {totalPages > 1 && (
        <div className="pagination">
          {page > 0 && (
            <button onClick={() => setPage(page - 1)}>&larr;</button>
          )}
          {page < totalPages - 1 && (
            <button onClick={() => setPage(page + 1)}>&rarr;</button>
          )}
        </div>
      )}
    </div>
  );
}

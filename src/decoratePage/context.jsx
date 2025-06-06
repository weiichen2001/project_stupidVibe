// context.js
import React, { createContext, useState } from "react";

// 建立 context
export const LayoutContext = createContext();

// 提供 context 的元件
export function LayoutProvider({ children }) {
  const [placedItems, setPlacedItems] = useState([]);

  // 加入一個新貼紙（由點選素材面板觸發）
  const addItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now(), // 簡單的唯一 ID
      position: { top: 100, left: 100 } // 預設貼上位置
    };
    setPlacedItems((prev) => [...prev, newItem]);
  };

  // 拖曳後移動貼紙位置
  const moveItem = (id, newPosition) => {
    setPlacedItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, position: newPosition } : item
      )
    );
  };

  // 清除全部貼紙
  const clearAll = () => {
    setPlacedItems([]);
  };

  // 你之後也可以加 removeItem

  return (
    <LayoutContext.Provider
      value={{ placedItems, addItem, moveItem, clearAll }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

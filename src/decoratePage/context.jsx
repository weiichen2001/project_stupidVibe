import { createContext, useState } from "react";
import decoItems from "../data/decoItems";

// 建立 context
export const LayoutContext = createContext();

// 提供 context 的元件
export function LayoutProvider({ children }) {

  // 預設臉的圖片路徑
  const defaultFaceSrc = decoItems.facialExpression[0].src;
  const [faceSrc, setFaceSrc] = useState(defaultFaceSrc); // 專門管理臉圖

  // 加入貼紙（臉貼紙已不在其中）
  const [placedItems, setPlacedItems] = useState([]);

  const addItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now(),
      position: { top: 50, left: 50 },
      widthRatio: item.widthRatio
    };
    setPlacedItems((prev) => [...prev, newItem]);
  };

  const moveItem = (id, newPosition) => {
    setPlacedItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, position: newPosition } : item
      )
    );
  };

  const clearAll = () => {
    setPlacedItems([]); // 不會清掉 faceSrc
  };

  const [selectedId, setSelectedId] = useState(null);
  const removeItem = (id) => {
    setPlacedItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 換臉函式
  const updateFaceSticker = (newSrc) => {
    setFaceSrc(newSrc);
  };

  return (
    <LayoutContext.Provider
      value={{
        faceSrc,           // 臉圖檔
        updateFaceSticker, // 換臉函式
        placedItems,
        addItem,
        moveItem,
        clearAll,
        selectedId,
        removeItem
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

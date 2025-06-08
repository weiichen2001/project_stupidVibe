import { createContext, useState } from "react";
import decoItems from "../data/decoItems";

// 建立 context
export const LayoutContext = createContext();

// 提供 context 的元件
export function LayoutProvider({ children }) {

  // 設定預設臉
  const getDefaultFace = () => ({
    ...decoItems.facialExpression[0],
    id: 'face-sticker',
    position: { top: 21.4286, left: 29.7222 },
    widthRatio: decoItems.facialExpression[0].widthRatio
  });

  const [placedItems, setPlacedItems] = useState([getDefaultFace()]);

  const updateFaceSticker = (newSrc) => {
    setPlacedItems((prev) =>
      prev.map((item) =>
        item.id === 'face-sticker' ? { ...item, src: newSrc } : item
      )
    );
  };


  // 加入一個新貼紙（由點選素材面板觸發）
  const addItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now(), // 簡單的唯一 ID
      position: { top: 50, left: 50 },// 預設貼上位置
      widthRatio: item.widthRatio
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
    setPlacedItems([getDefaultFace()]);
  };

  // removeItem
  const [selectedId, setSelectedId] = useState(null);
  const removeItem = (id) => {
    setPlacedItems((prev) => prev.filter((item) => item.id !== id));
  };





  return (
    <LayoutContext.Provider
      value={{
        placedItems,
        addItem,
        moveItem,
        clearAll,
        selectedId,
        removeItem,
        updateFaceSticker
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

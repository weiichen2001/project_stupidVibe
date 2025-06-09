// 商品區與模型圖 + 貼紙按鈕 + 購物車區塊（不含步驟流程）

import React, { useState } from "react";
import CartSteps from "./cartSteps";


export default function MerchSection({ onGetReceipt, cartBtnRef }) {
  const [showCart, setShowCart] = useState(false);  // 控制是否顯示購物車元件
  const [animateOut, setAnimateOut] = useState(false);  // 控制是否播放滑出動畫
  const toggleCart = () => {
    if (showCart) {
      // 播放滑出動畫
      setAnimateOut(true);
      setTimeout(() => {
        setShowCart(false);    // 真正隱藏
        setAnimateOut(false);  // 重置動畫狀態
      }, 600); // 時間要和 slide-out 動畫一致
    } else {
      setShowCart(true); // 開啟購物車
    }
  };

  return (
    <section id="merch">
      {/* 背景模型圖 */}
      <div className="model">
        <img src="./images/merch/model.png" className="bg-model" alt="background model" />


        {/* 商品圖定位：根據 bg-model 擺放 */}
        <img src="./images/merch/acstand.png" alt="merch-acrylic stand" className="item acstand" />
        <img src="./images/merch/photocard.png" alt="merch-photocard" className="item photocard" />
        <img src="./images/merch/postcard.png" alt="merch-postcard" className="item postcard" />
        <img src="./images/merch/handfan.png" alt="merch-handfan" className="item handfan" />
        <img src="./images/merch/poster.png" alt="merch-poster" className="item poster" />
        <img src="./images/merch/badge1.png" alt="merch-badge1" className="item badge1" />
        <img src="./images/merch/badge2.png" alt="merch-badge2" className="item badge2" />
        <img src="./images/merch/sticker-pack1.png" alt="merch-sticker-pack1" className="item sticker-pack1" />
        <img src="./images/merch/sticker-pack2.png" alt="merch-sticker-pack2" className="item sticker-pack2" />
        <img src="./images/merch/bag.png" alt="merch-bag" className="item bag" />
      </div>

      {/* 左側貼紙按鈕圖（Check My Cart） */}
      <button ref={cartBtnRef} onClick={toggleCart} className="cart-sticker-img"><img src="./images/merch/checkMyCart.svg" alt="Check My Cart" /></button>

      {/* 購物流程區塊（包含手與卡片） */}
      {showCart && <CartSteps onGetReceipt={onGetReceipt} animateOut={animateOut} />}

    </section>
  );
}

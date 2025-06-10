// 商品區與模型圖 + 貼紙按鈕 + 購物車區塊（不含步驟流程）

import React, { useState } from "react";
import CartSteps from "./cartSteps";
import merchItems from "../data/merchItems";


export default function MerchSection({ onGetReceipt, cartBtnRef }) {
  const [showCart, setShowCart] = useState(false);  // 控制是否顯示購物車元件
  const [animateOut, setAnimateOut] = useState(false);  // 控制是否播放滑出動畫
  const [hoveredId, setHoveredId] = useState(null);
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


        {/* 商品圖定位：根據 bg-model 擺放
        <img src="./images/merch/acstand.png" alt="merch-acrylic stand" className="item acstand" />
        <img src="./images/merch/photocard.png" alt="merch-photocard" className="item photocard" />
        <img src="./images/merch/postcard.png" alt="merch-postcard" className="item postcard" />
        <img src="./images/merch/handfan.png" alt="merch-handfan" className="item handfan" />
        <img src="./images/merch/poster.png" alt="merch-poster" className="item poster" />
        <img src="./images/merch/badge1.png" alt="merch-badge1" className="item badge1" />
        <img src="./images/merch/badge2.png" alt="merch-badge2" className="item badge2" />
        <img src="./images/merch/sticker-pack1.png" alt="merch-sticker-pack1" className="item sticker-pack1" />
        <img src="./images/merch/sticker-pack2.png" alt="merch-sticker-pack2" className="item sticker-pack2" />
        <img src="./images/merch/bag.png" alt="merch-bag" className="item bag" /> */}

        {merchItems.map((item) => (
          <div
            key={item.id}
            className={`merch-with-card float-${item.cardFloat || "right"}`}
            style={{ position: "absolute", ...item.style }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => {
              // 延遲清除，讓滑到卡片仍可操作
              setTimeout(() => {
                setHoveredId((prev) => (prev === item.id ? null : prev));
              }, 100);
            }}
          >
            <img src={item.img} alt={item.alt} className="item-img" />

            {/* 如果 hover 到的是這張商品或其卡片，就顯示卡片 */}

            {(hoveredId === item.id) && (
              <div className="item-card-wrapper"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="item-card" >
                  <img src="./images/merch/hover-card.png" className="card-bg" alt="card bg" />
                  <div className="card-content">
                    <h3>{item.card.name}</h3>
                    <p>Product Dimensions : {item.card.size}</p>
                    <p>Material : {item.card.material}</p>
                    <p className="desc">{item.card.desc}</p>
                    {/* 下面一列 */}
                    <div className="bottom-row">
                      <p className="price">USD  {item.card.price}</p>
                      {/* 數量增減按鈕 */}
                      <div className="numCount">
                        <img src="./images/merch/icon/add-icon.svg" alt="icon-add" className="add" />
                        <div className="num">02</div>
                        <img src="./images/merch/icon/minus-icon.svg" alt="icon-minus" className="minus" />
                      </div>
                      {/* 右側按鈕 */}
                      <div className="btn-all">
                        <button className="addCart">
                          <span>Add to cart</span>
                          <img src="./images/merch/icon/shopping-cart-icon.svg" alt="" className="cart" />
                        </button>
                        <button className="checkOut">
                          <span>Checkout</span>
                          <img src="./images/merch/icon/payment-icon-24.svg" alt="" className="cart" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 左側貼紙按鈕圖（Check My Cart） */}
      <button ref={cartBtnRef} onClick={toggleCart} className="cart-sticker-img"><img src="./images/merch/checkMyCart.svg" alt="Check My Cart" /></button>

      {/* 購物流程區塊（包含手與卡片） */}
      {showCart && <CartSteps onGetReceipt={onGetReceipt} animateOut={animateOut} />}

    </section>
  );
}

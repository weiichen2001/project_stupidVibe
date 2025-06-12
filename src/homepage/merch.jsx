// 商品區與模型圖 + 貼紙按鈕 + 購物車區塊（不含步驟流程）

import React, { useState } from "react";
import CartSteps from "./cartSteps";
import merchItems from "../data/merchItems";

export default function MerchSection({ onGetReceipt, cartBtnRef }) {
  const [showCart, setShowCart] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const toggleCart = () => {
    if (showCart) {
      // 播放滑出動畫
      setAnimateOut(true);
      setTimeout(() => {
        setShowCart(false);
        setAnimateOut(false);
      }, 600);
    } else {
      setShowCart(true);
    }
  };

  // 提供給 CartSteps 用來隱藏購物車的函數
  const hideCart = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShowCart(false);
      setAnimateOut(false);
    }, 600);
  };

  // 包裝 onGetReceipt，傳入隱藏購物車的回調函數
  const handleGetReceiptWithHideCart = () => {
    onGetReceipt(hideCart);
  };

  return (
    <section id="merch">
      {/* 背景模型圖 */}
      <div className="model">
        <img src="./images/merch/model.png" className="bg-model" alt="background model" />

        {merchItems.map((item) => (
          <div
            key={item.id}
            className={`merch-with-card float-${item.cardFloat || "right"}`}
            style={{ position: "absolute", ...item.style }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => {
              setTimeout(() => {
                setHoveredId((prev) => (prev === item.id ? null : prev));
              }, 100);
            }}
          >
            <img src={item.img} alt={item.alt} className="item-img" />

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
                    <div className="bottom-row">
                      <p className="price">USD  {item.card.price}</p>
                      <div className="numCount">
                        <img src="./images/merch/icon/minus-icon.svg" alt="icon-minus" className="minus" />
                        <div className="num">02</div>
                        <img src="./images/merch/icon/add-icon.svg" alt="icon-add" className="add" />
                      </div>
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
      <button ref={cartBtnRef} onClick={toggleCart} className="cart-sticker-img">
        <img src="./images/merch/checkMyCart.svg" alt="Check My Cart" />
      </button>

      {/* 購物流程區塊（包含手與卡片） */}
      {showCart && (
        <CartSteps 
          onGetReceipt={handleGetReceiptWithHideCart} 
          animateOut={animateOut} 
        />
      )}
    </section>
  );
}
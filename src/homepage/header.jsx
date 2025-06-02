import React from "react";

export default function Header() {
  return (
    <header id="nav">
      {/* logo */}
      <a href="/" className="logo">
        <img src="./images/hero/stupidVibe-logo-w.svg" alt="logo" />
      </a>

      {/* 浮動選單區 */}
      <div id="menu">
        <div className="menu-toggle">
          <img src="./images/menu/btn-menu.png" alt="menu-toggle" />
        </div>

        <div className="menu-panel">
          <a href="#" className="menu-item home">
            <img src="./images/menu/icon-home.svg" alt="icon-home" />
            <span>HOME</span>
          </a>
          <a href="#" className="menu-item room">
            <img src="./images/menu/icon-room.svg" alt="icon-room" />
            <span>ROOM</span>
          </a>
          <a href="#" className="menu-item cart">
            <img src="./images/menu/icon-cart.svg" alt="icon-cart" />
            <span>CART</span>
          </a>
          <a href="#" className="menu-item about">
            <img src="./images/menu/icon-about.svg" alt="icon-about" />
            <span>ABOUT</span>
          </a>
        </div>
      </div>
    </header>
  );
}

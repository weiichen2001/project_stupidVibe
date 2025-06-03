import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu({ onCartClick, onScrollToHero }) {
    const location = window.location.pathname;
    const [open, setOpen] = useState(false);
    const handleHomeClick = (e) => {
        e.preventDefault();
        if (location === "/project_stupidVibe/") {
            // 已經在首頁，滑到最上面
            onScrollToHero?.();
        } else {
            // 導回首頁
            window.location.href = "/project_stupidVibe/";
        }
    };

    return (
        <header id="nav">
            {/* logo */}
            <a href="/" className="logo" onClick={handleHomeClick}>
                <img src="./images/hero/stupidVibe-logo-w.svg" alt="logo" />
            </a>

            {/* 浮動選單區 */}
            <div id="menu" className={open ? "open" : ""}>
                <div className="menu-toggle" onClick={() => setOpen(!open)}>
                    <img className="test-img" src="./images/menu/btn-menu.png" alt="menu-toggle" />
                </div>

                <div className="menu-panel">
                    <a href="/project_stupidVibe/" className="menu-item home" onClick={handleHomeClick}>
                        <img src="./images/menu/icon-home.svg" alt="icon-home" />
                        <span>HOME</span>
                    </a>

                    <Link to="/decorate" className="menu-item room">
                        <img src="./images/menu/icon-room.svg" alt="icon-room" />
                        <span>ROOM</span>
                    </Link>

                    <Link onClick={onCartClick} className="menu-item cart">
                        <img src="./images/menu/icon-cart.svg" alt="icon-cart" />
                        <span>CART</span>
                    </Link>


                    <a href="#" className="menu-item about">
                        <img src="./images/menu/icon-about.svg" alt="icon-about" />
                        <span>ABOUT</span>
                    </a>
                </div>
            </div>
        </header >
    );
}
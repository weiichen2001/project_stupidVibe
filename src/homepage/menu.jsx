import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Menu({ onCartClick, onScrollToHero }) {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    
    console.log('當前路徑:', location.pathname);
    
    const logoMap = {
        "/": "./images/hero/stupidVibe-logo-w.svg",           // 首頁
        "/decorate": "./images/hero/stupidVibe-logo-b.svg", // decorate 頁
    };
    const logoSrc = logoMap[location.pathname] || "./images/hero/stupidVibe-logo-w.svg";
    
    console.log('選擇的 logo:', logoSrc);
    
    const handleHomeClick = (e) => {
        e.preventDefault();
        if (location.pathname === "/") {  // 也要改成 "/"
            onScrollToHero?.();
        } else {
            window.location.href = "/project_stupidVibe/";
        }
    };

    return (
        <header id="nav">
            <a href="/" className="logo" onClick={handleHomeClick}>
                <img src={logoSrc} alt="logo" />
            </a>

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
        </header>
    );
}
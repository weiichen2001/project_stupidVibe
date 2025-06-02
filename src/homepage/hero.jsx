import React from "react";

export default function HeroSection() {
    return (
        <section id="hero">
            {/* 隱藏的主標題（輔助 SEO / 無障礙） */}
            <h1 className="visually-hidden">HAPPY HOSHI DAY</h1>

            {/* CTA 按鈕區塊 */}
            <div className="cta">
                <a href="#" className="merch">VIEW MERCHANDISE</a>
                <a href="#" className="decorate">DECORATE MY ROOM</a>
            </div>
        </section>
    );
}

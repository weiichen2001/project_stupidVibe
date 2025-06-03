// Manual 說明書區塊
// 包含裝飾性背景圖、說明卡片、三步驟圖片與貼紙按鈕等

import React from "react";
import { Link } from "react-router-dom";

export default function ManualSection() {
  return (
    <section className="manual-section">
      {/* 裝飾性背景圖 */}
      <img src="./images/manual/bg-deco-manual.png" alt="manual decoration" className="bg-deco-manual manual1" />
      <img src="./images/manual/bg-deco-manual.png" alt="manual decoration" className="bg-deco-manual manual2" />

      {/* 說明卡片整塊 */}
      <div className="manual-card">
        {/* 上方區塊：Logo 與副標 */}
        <div className="manual-header">
          <div className="logoTitle">
            <img src="./images/manual/stupidVibe-logo-b.svg" alt="Stupid Vibe logo" className="logo" />
            <div className="userManual">USER <br />MANUAL</div>
          </div>
          <p className="subtitle">Come here and prepare for my birthday party!</p>
        </div>

        {/* 卡片內框：步驟區域 */}
        <div className="frameOut">
          <div className="manual-steps">
            <div className="left">
              {/* STEP 1 */}
              <div className="step1 block">
                <h3>STEP 1</h3>
                <p>Grab your favorite birthday merch now!</p>
                <img className="step1" src="./images/manual/step1-merch.png" alt="Merch items" />
                <p>Pick a heartfelt gift and <br />surprise today’s star!</p>
              </div>

              {/* STEP 2 */}
              <div className="step2 block">
                <h3>STEP 2</h3>
                <p>Build your birthday scene now!</p>
                <img className="step2" src="./images/manual/step2-room.png" alt="Decorate scene" />
                <p>All set and ready—get creative! <br />Decorate your cutest corner!</p>
              </div>
            </div>

            <div className="right">
              {/* Hoshi 全身圖 */}
              <div className="standing block">
                <img className="standing" src="./images/manual/hoshi-staning.png" alt="Hoshi full-body" />
              </div>
              {/* STEP 3 */}
              <div className="step3 block">
                <h3>STEP 3</h3>
                <img className="step3" src="./images/manual/step3-box.jpg" alt="Unboxing box" />
                <p>Unboxing the surprise!</p>
              </div>
            </div>
          </div>

          <p className="phrase">Distribution of Good Vibes is Highly Encouraged.</p>
        </div>

        <div className="footer">
          <p className="footer-text">© Stupid Vibe Birthday Edition. All Party Rights Reserved.</p>
        </div>
      </div>

      {/* 三張貼紙按鈕 */}
      <a href="#merch" className="manual-sticker buy-now">
        <img src="./images/manual/buyNow.png" alt="go to merch zone" />
      </a>
      <Link to="/decorate" className="manual-sticker decorate-now">
        <img src="./images/manual/decorate.png" alt="decorate your room" />
      </Link>
      <a href="#openbox" className="manual-sticker open-box">
        <img src="./images/manual/openBox.png" alt="view unboxing animation" />
      </a>
    </section>
  );
}

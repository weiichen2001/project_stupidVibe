// Receipt.jsx
import React, { useEffect, useState } from "react";

export default function Receipt() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState(0);
  const [showTotal, setShowTotal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    // 使用 Intersection Observer 來偵測何時進入畫面
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          // 延遲一點再開始動畫，讓滑動先完成
          setTimeout(() => {
            setIsVisible(true);
          }, 300);
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px' // 稍微晚一點觸發
      }
    );

    const section = document.getElementById('receipt-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      observer.disconnect();
    };
  }, [isVisible]);

  // 收據內容逐步顯示
  useEffect(() => {
    if (isVisible) {
      // 先等收據紙張動畫完成（2秒）
      const paperTimer = setTimeout(() => {
        // 然後逐行顯示明細
        const itemInterval = setInterval(() => {
          setVisibleItems(prev => {
            if (prev < 4) {
              return prev + 1;
            } else {
              clearInterval(itemInterval);
              // 明細顯示完後顯示總計
              setTimeout(() => {
                setShowTotal(true);
                // 再顯示感謝語
                setTimeout(() => {
                  setShowThankYou(true);
                }, 400);
              }, 300);
              return prev;
            }
          });
        }, 200); // 每0.2秒顯示一行
      }, 2000);

      return () => {
        clearTimeout(paperTimer);
      };
    }
  }, [isVisible]);

  const items = [
    "2025 HOSHI Birthday Postcard - dumb ver. × 1",
    "2025 HOSHI Birthday Postcard - dumb ver. × 1", 
    "2025 HOSHI Birthday Postcard - dumb ver. × 1",
    "2025 HOSHI Birthday Postcard - dumb ver. × 1"
  ];

  return (
    <section id="receipt-section">
      <div className="printer">
        <div className="printer-exit">
          {/* 收據本人 */}
          <div className={`receipt-paper ${isVisible ? "animate" : ""}`}>
            <h2>- RECEIPT -</h2>
            <p className="time">2025.06.15 AM 10:10</p>
            <hr />
            <hr />
            <ul>
              {items.map((item, index) => (
                <li 
                  key={index}
                  className={`receipt-item ${index < visibleItems ? 'show' : ''}`}
                >
                  {item} <span>USD $2.00</span>
                </li>
              ))}
            </ul>
            <hr />
            <p className={`total ${showTotal ? 'show' : ''}`}>
              Total <span>NT 1,260</span>
            </p>
            <hr />
            <p className={`thank-you ${showThankYou ? 'show' : ''}`}>THANK YOU</p>
            <hr />
            <div className={`barcode ${showThankYou ? 'show' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="123" height="32" viewBox="0 0 123 32" fill="none">
                <path d="M1 0L1 32" stroke="#383838" strokeWidth="2" />
                <path d="M9 0L9 32" stroke="#383838" strokeWidth="2" />
                <path d="M19 0L19 32" stroke="#383838" strokeWidth="5" />
                <path d="M28 0L28 32" stroke="#383838" strokeWidth="7" />
                <path d="M35 0L35 32" stroke="#383838" strokeWidth="2" />
                <path d="M45 0L45 32" stroke="#383838" strokeWidth="7" />
                <path d="M53 0L53 32" stroke="#383838" strokeWidth="5" />
                <path d="M61 0L61 32" stroke="#383838" strokeWidth="2" />
                <path d="M70 0L70 32" stroke="#383838" strokeWidth="2" />
                <path d="M78 0L78 32" stroke="#383838" strokeWidth="5" />
                <path d="M88 0L88 32" stroke="#383838" strokeWidth="2" />
                <path d="M97 0L97 32" stroke="#383838" strokeWidth="7" />
                <path d="M104 0L104 32" stroke="#383838" strokeWidth="5" />
                <path d="M114 0L114 32" stroke="#383838" strokeWidth="2" />
                <path d="M122 0L122 32" stroke="#383838" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// Receipt.jsx
import React, { useEffect, useState } from "react";


export default function Receipt() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 模擬等資料載入再顯示
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500); // 0.5 秒後顯示動畫
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="receipt-section">
            <div className="printer">
                <div className="printer-exit">
                    {/* 收據本人 */}
                    <div className={`receipt-paper ${isVisible ? "animate" : ""}`}>
                        {/* 可以放你自己客製化的收據內容 */}
                        <h2>- RECEIPT -</h2>
                        <p className="time">2025.06.15 AM 10:10</p>
                        <hr />
                        <hr />
                        <ul>
                            <li>2025 HOSHI Birthday Postcard - dumb ver. × 1 <span>NT 420</span></li>
                            <li>2025 HOSHI Birthday Postcard - dumb ver. × 1 <span>NT 420</span></li>
                            <li>2025 HOSHI Birthday Postcard - dumb ver. × 1 <span>NT 420</span></li>
                            <li>2025 HOSHI Birthday Postcard - dumb ver. × 1 <span>NT 420</span></li>
                        </ul>
                        <hr />
                        <p className="total">Total <span>NT 1,260</span></p>
                        <hr />
                        <p className="thank-you">THANK YOU</p>
                        <hr />
                        <div className="barcode"><svg xmlns="http://www.w3.org/2000/svg" width="123" height="32" viewBox="0 0 123 32" fill="none">
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
                        </svg></div>
                    </div>
                </div>
            </div>

        </section>
    );
}

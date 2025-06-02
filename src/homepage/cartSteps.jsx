import React, { useEffect } from "react";




export default function CartSteps({onGetReceipt}) {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/leapfrog.js";
        document.body.appendChild(script);
    }, []);

    return (
        <>
            {/* 滑出購物車卡片  */}
            <div className="cart-popup slide-in">
                <div className="hand"></div>

                {/* Step 1: 購物車  */}
                <div className="cart-step step1 ">
                    {/* title  */}
                    <div className="title">
                        <h2>Shopping Cart</h2>
                        <img src="./images/merch/icon/shopping-cart-icon.svg" alt="cart-icon" className="cart-icon" />
                    </div>
                    {/* 購物車清單  */}
                    <div className="item-list">
                        {/* 01  */}
                        <div className="item">
                            <img src="./images/merch/icon/delete-icon.svg" alt="delete-icon" className="delete" />
                            <div className="photo">
                                <img src="./images/merch/postcard.png" alt="merch-postcard" />
                            </div>
                            <p className="item-name">2025 HOSHI Birthday Postcard - dumb ver.</p>
                            <div className="priceNum">
                                <p className="price">USD 2.00</p>
                                <div className="numCount">
                                    <img src="./images/merch/icon/add-icon.svg" alt="icon-add" className="add" />
                                    <div className="num">02</div>
                                    <img src="./images/merch/icon/minus-icon.svg" alt="icon-minus" className="minus" />
                                </div>
                            </div>
                        </div>
                        {/* 02  */}
                        <div className="item">
                            <img src="./images/merch/icon/delete-icon.svg" alt="delete-icon" className="delete" />
                            <div className="photo">
                                <img src="./images/merch/badge2.png" alt="merch-badge2" />
                            </div>
                            <p className="item-name">2025 HOSHI Birthday Badge – birthday ver.</p>
                            <div className="priceNum">
                                <p className="price">USD 2.50</p>
                                <div className="numCount">
                                    <img src="./images/merch/icon/add-icon.svg" alt="icon-add" className="add" />
                                    <div className="num">01</div>
                                    <img src="./images/merch/icon/minus-icon.svg" alt="icon-minus" className="minus" />
                                </div>
                            </div>
                        </div>
                        {/* 03  */}
                        <div className="item">
                            <img src="./images/merch/icon/delete-icon.svg" alt="delete-icon" className="delete" />
                            <div className="photo">
                                <img src="./images/merch/sticker-pack1.png" alt="merch-sticker-pack1" />
                            </div>
                            <p className="item-name">2025 HOSHI Sticker Pack - Weekend With Hoshi ver.</p>
                            <div className="priceNum">
                                <p className="price">USD 2.50</p>
                                <div className="numCount">
                                    <img src="./images/merch/icon/add-icon.svg" alt="icon-add" className="add" />
                                    <div className="num">04</div>
                                    <img src="./images/merch/icon/minus-icon.svg" alt="icon-minus" className="minus" />
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* 總計及結帳按鈕  */}
                    <div className="totalCheck">
                        <p className="total">Total :</p>
                        <p className="currency">USD</p>
                        <p className="price">2,360</p>
                        <button className="next-btn">
                            <img src="./images/merch/icon/payment-icon.svg" alt="checkout" className="checkout" />
                            <p>Checkout</p>
                        </button>
                    </div>

                </div>

                {/* Step 2: 地址輸入  */}
                <div className="cart-step step2 ">
                    {/* title  */}
                    <div className="title">
                        <h2>Shipping Address</h2>
                        <img src="./images/merch/icon/shopping-cart-icon.svg" alt="cart-icon" className="cart-icon" />
                    </div>
                    {/* 按鈕區  */}
                    <div className="btn-all">
                        {/* 上一頁  */}
                        <button className="page-btn back-btn">
                            <div className="back-icon">
                                <img src="./images/merch/icon/back-icon.svg" alt="back-icon" />
                            </div>
                            <p>Back</p>
                        </button>
                        {/* 下一頁  */}
                        <button className="page-btn next-btn">
                            <p>Next</p>
                            <div className="next-icon">
                                <img src="./images/merch/icon/next-icon.svg" alt="next-icon" />
                            </div>
                        </button>
                    </div>
                    {/* 表單區  */}
                    <form action="" method="post" name="address-form" id="address-form" title="address-form">
                        <div className="col1">
                            {/* first name  */}
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" id="firstName" title="firstName"
                                placeholder="Enter first name (English)" required />
                            {/* last name  */}
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastName" title="lastName" placeholder="Enter last name (English)"
                                required />
                            {/* shipping country/region  */}
                            {/* 下拉選單:<select>  */}
                            <label htmlFor="country">Shipping Country/Region</label>
                            <select name="country" id="country">
                                <option value="">Select your country/region</option>
                                <option value="">Korea</option>
                                <option value="">Japan</option>
                                <option value="">Taiwan</option>
                            </select>
                            {/* address  */}
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address1" id="address1" title="address1"
                                placeholder="Enter street address (English)" required />
                            <input type="text" name="address2" id="address2" title="address2"
                                placeholder="Detailed address (Optional.English)" />
                        </div>

                        <div className="col2">
                            {/* city  */}
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" id="city" title="city" placeholder="Enter city" required />
                            {/* state  */}
                            <label htmlFor="state">State, province, or region</label>
                            <input type="text" name="state" id="state" title="state" placeholder="Enter state, province, or region"
                                required />
                            {/* postal code  */}
                            <label htmlFor="postal-code">Postal Code</label>
                            <input type="text" name="postal-code" id="postal-code" title="postal-code" placeholder="Enter postal code"
                                required />
                            {/* phone number  */}
                            <label htmlFor="phone-number">Phone Number</label>
                            <input type="text" name="phone-number" id="phone-number" title="phone-number"
                                placeholder="Enter phone number" required />
                        </div>


                    </form>

                </div>

                {/* Step 3: 付款資訊  */}
                <div className="cart-step step3 ">
                    {/* title  */}
                    <div className="title">
                        <h2>Payment Methods</h2>
                        <img src="./images/merch/icon/shopping-cart-icon.svg" alt="cart-icon" className="cart-icon" />
                    </div>
                    {/* 按鈕+右側顯示付款方式  */}
                    <div className="btn-payment">
                        {/* 上一頁  */}
                        <button className="page-btn back-btn">
                            <div className="back-icon">
                                <img src="./images/merch/icon/back-icon.svg" alt="back-icon" />
                            </div>
                            <p>Back</p>
                        </button>
                        {/* 付款方式  */}
                        <div className="payment-text">
                            <span>Credit Card</span>
                        </div>
                    </div>
                    {/* 付款所有內容區  */}
                    <div className="payment-content-all">
                        {/* 付款方式選擇與總價-col-left  */}
                        <div className="payment-total">
                            {/* 選擇付款方式  */}

                            {/* 相關選項(元素)群組 :<fieldset>  */}
                            <fieldset className="payment-selection">
                                {/* 用name名稱來判斷是否為同組選項  */}
                                <div className="row1">
                                    <div className="option">
                                        <input type="radio" name="method" id="credit-card" />
                                        <label htmlFor="credit-card">Credit Card</label>
                                    </div>
                                    <div className="icon">
                                        <img src="./images/merch/icon/icon-visa.svg" alt="icon-visa" />
                                        <img src="./images/merch/icon/icon-master.svg" alt="icon-master" />
                                        <img src="./images/merch/icon/icon-jcb.svg" alt="icon-jcb" />
                                    </div>
                                </div>

                                <div className="row2">
                                    <div className="option">
                                        <input type="radio" name="method" id="applePay" />
                                        <label htmlFor="applePay">Apple Pay</label>
                                    </div>
                                    <div className="icon">
                                        <img src="./images/merch/icon/icon-applePay.svg" alt="applePay-icon" />
                                    </div>
                                </div>

                                <div className="row3">
                                    <div className="option">
                                        <input type="radio" name="method" id="linePay" />
                                        <label htmlFor="linePay">Line Pay</label>
                                    </div>
                                    <div className="icon">
                                        <img src="./images/merch/icon/icon-linePay.svg" alt="linePay-icon" />
                                    </div>
                                </div>
                            </fieldset>

                            {/* 總價顯示  */}
                            <div className="total-price">
                                <span className="currency">USD</span>
                                <span className="total">2,360</span>
                            </div>
                        </div>

                        {/* 信用卡付款填寫及提交-col-right  */}
                        <div className="creditCard-and-btn">
                            {/* 信用卡填寫區域  */}
                            <div className="creditCard-input-all">
                                {/* 輸入卡號  */}

                                <div className="icon">
                                    <img src="./images/merch/icon/icon-visa.svg" alt="icon-visa" />
                                    <img src="./images/merch/icon/icon-master.svg" alt="icon-master" />
                                    <img src="./images/merch/icon/icon-jcb.svg" alt="icon-jcb" />
                                </div>
                                <div className="input-credit">
                                    <div className="row1">
                                        <label>Card Number</label>
                                        <input type="text" className="input card-number" placeholder="1234 5678 9012 3456" />
                                    </div>
                                    <div className="row2">
                                        <div className="col1">
                                            <label>CVC</label>
                                            <input type="text" className="input card-cvc" placeholder="CVC" />
                                        </div>
                                        <div className="col2">
                                            <label>Expiry Date</label>
                                            <input type="text" className="input card-expiry" placeholder="MM/YY" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 送出按鈕  */}
                            <button className="checkout-btn">
                                <p>Purchase For $2,360</p>
                            </button>
                        </div>
                    </div>

                </div>

                {/* Step 4: 處理中  */}
                <div className="cart-step step4 ">
                    {/* all content  */}
                    <div className="all-content">
                        <h2>Loading</h2>
                        <l-leapfrog size="120" speed="2.5" color="#383838" className="loading-animation"></l-leapfrog>
                        <p className="caption">Your order is being processed...</p>
                    </div>
                </div>

                {/* Step 5: 完成畫面  */}
                <div className="cart-step step5 active ">
                    {/* title  */}
                    <div className="title">
                        <h2>Purchase Completed</h2>
                    </div>
                    {/* 購物車  */}
                    <div className="cart-container">
                        <img src="./images/merch/cart-all.png" alt="cart-all" className="cart-all" />
                    </div>
                    {/* 按鈕和小提醒  */}
                    <div className="btn-notice">
                        <button className="receipt" onClick={onGetReceipt}>
                            Get Receipt
                        </button>
                        <p className="notice">* Please take a screenshot and save it yourself</p>
                    </div>
                </div>

            </div>

        </>

    )
}
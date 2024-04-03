import React from 'react'
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"
import "../../../src/pages/cart/cart.css"

const SHIPPING_CHARGES = 25
const DISCOUNT_PRICE = 10



function Buynow () {
    const location = useLocation();
    const receivedData = location.state;
   
    const round = (value, decimals) => {
        return Number(Math.round(value + "e" + decimals) + "e-" + decimals)
    }

  return (
    <div className="cartWrapper mar-res">
    <div className="container">
            <div className="grid my-6">
                <div className="cartItem p-3">
                    <h2>Order Summary</h2>
                        <div className="item" key={receivedData.id}>
                            <div className="grid py-3">
                                <div className="itemImage">
                                    <img src={receivedData.image} alt="" />
                                </div>
                                <div className="itemDesc">
                                    <div className="title">
                                        <Link to={"/product/" + receivedData.id} className="titleLink">
                                            {receivedData.title}
                                        </Link>
                                    </div>
                                    <span className="price">₹{round(receivedData.price * 1, 2)}</span>
                                </div>
                                <div className="itemControl flex">
                                    <div>
                    
                                        <button
                                            onClick={() => {}}
                                            disabled={receivedData.quantity === 1}
                                            className="removeQty"
                                        >
                                            -
                                        </button>
                                        <span className="mx-1">{1}</span>
                                        <button
                                            onClick={() => { }}
                                            
                                            className="addQty"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                </div>
                <div className="payment p-3">
                    <h2>Payment Summary</h2>
                    <div className="summary py-3 my-2">
                        <div >
                            <div className="summary-b" key={receivedData.id}>
                                <div>{receivedData.title}</div>
                                <div className="price">{`${1} x ${receivedData.price} = ${1 * receivedData.price}`}</div>
                            </div>
                        </div>
                        <div className="flex py-1">
                            <span>Subtotal:</span>
                            <span className="price">₹{round(receivedData.price * 1, 2)}</span>
                        </div>
                        <div className="flex py-1">
                            <span>Discount price</span>
                            <span className="discount">- ₹{ DISCOUNT_PRICE }</span>
                        </div>
                        <div className="flex py-1">
                            <span>Shipping Fee:</span>
                            <span className="price">₹{SHIPPING_CHARGES}</span>
                        </div>
                        <div className=" summary flex py-1">
                            <span>Total:</span>
                            <span className="price">₹{round((receivedData.price + SHIPPING_CHARGES) - DISCOUNT_PRICE, 2)}</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
  )
}

export default Buynow;

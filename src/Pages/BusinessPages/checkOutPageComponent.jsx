import React, { Component } from 'react';
import '../../PagesStyles/BusinessPageStyles/checkOutPageComponent.css'

class CheckOutPageComponent extends Component {
    state = {}
    render() {
        return (
            <>
                <div className='CheckOutPageheadersection'>
                    <div className='CheckOutPageheadersectionleft'>
                        <button>
                            <img src={require('../.././left-arrowmain.png')} alt="Arrow icon" className='arrowicon' />
                        </button>
                        <p>Back to store</p>
                    </div>

                    <div className='CheckOutPageheadersectionright'>
                        <img src={require('../../gas-cylinder11.png')} alt='Gas Space Logo' />
                        <p>Gas <span>Space</span></p>
                    </div>

                </div>
                <main className='container'>
                    {/*<h1 className='heading'>
                        <ion-icon name="cart-outline"></ion-icon> Shopping Cart
                    </h1> */}

                    <div className='item-flex'>
                        {/**
                           *Checkout section 
                          */}


                        <section className="checkout">

                            <div className='deliveryform'>
                                <div className='deliveryformelement r'>
                                    <div className='leftside'>
                                        <h3>Delivery details</h3>
                                    </div>
                                    <div className='rightside'></div>

                                </div>

                                <div className='deliveryformelement a'>
                                    <div className='leftside'>
                                        {/*<img src="" alt="location" />*/}
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><title>Delivery bag</title><path d="M18 6V1H6v5H1v11c0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6V6h-5ZM9 4h6v2H9V4Zm11 13c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V9h16v8Z" fill="currentColor"></path></svg>
                                        <p>Carrefour Regir</p>
                                    </div>
                                    <div className='rightside'>
                                        <button>Edit</button>
                                    </div>

                                </div>

                            </div>



                            <div className="payment-form">
                                <h2 className="section-heading">Payment details</h2>

                                <div className="payment-method">

                                    <button className='method selected'>
                                        <ion-icon name="card"></ion-icon>

                                        <span>Credit card</span>

                                        <ion-icon className="checkmark fill" name="checkmark-circle"></ion-icon>
                                    </button>


                                    <button className='method'>
                                        <ion-icon name="logo-paypal"></ion-icon>

                                        <span>Paypal</span>

                                        <ion-icon className="checkmark" name="checkmark-circle-outline"></ion-icon>
                                    </button>

                                </div>

                                <form action="#">

                                    <div className="cardholder-name">
                                        <label htmlFor="cardholder-name" className="label-default">Cardholder name</label>

                                        <input type="text" id='cardholder-name' name='cardholder-name' className="input-default" />
                                    </div>

                                    {/*<div className="card-number">
                                        <label htmlFor="card-number" className="label-default">Card number</label>

                                        <input type="number" id='card-number' name='card-number' className="input-default" />
                                    </div>

                                    <div className="input-flex">

                                        <div className="expire-date">
                                            <label htmlFor="expire-date" className="label-default">Expiration date</label>

                                            <div className="input-flex">

                                                <input type="number" name="day" id="expire-date" placeholder='31' minLength={1} maxLength={31} className="input-default" />
                                                /
                                                <input type="number" name="month" id="expire-date" placeholder='12' minLength={1} maxLength={12} className="input-default" />
                                            </div>
                                        </div>

                                        <div className="cvv">
                                            <label htmlFor="cvv" className="label-default">CVV</label>

                                            <input type="number" id='cvv' name='cvv' className="input-default" />
                                        </div>
                                    </div>*/}
                                </form>
                            </div>
                            <button className='btn btn-primary'>
                                <b>Pay</b> XAF <span id='payAmount'>2.15</span>
                            </button>

                        </section>

                        {/**
                           *cart section 
                          */}

                        <section className="cart">

                            <div className="cart-item-box">

                                <h2 className="section-heading">Order Summary</h2>

                                <div className="product-card">

                                    <div className="card">

                                        <div className="img-box">
                                            <img src={require('../.././green-tomatoes.jpg')} alt="Green tomatoes" width={80} className="product-img" />
                                        </div>

                                        <div className="detail">

                                            <h4 className="product-name">Green Tomatoes 1 kilo</h4>

                                            <div className="wrapper">


                                                <div className="product-qty">
                                                    <button id="decrement">
                                                        <ion-icon name="remove-outline"></ion-icon>
                                                    </button>

                                                    <span id="quantity">1</span>

                                                    <button id="increment">
                                                        <ion-icon name="add-outline"></ion-icon>
                                                    </button>
                                                </div>

                                                <div className="price">
                                                    $ <span id="price">1.25</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="product-close-btn">
                                            <ion-icon name="close-outline"></ion-icon>
                                        </button>
                                    </div>
                                </div>

                                <div className="product-card">

                                    <div className="card">

                                        <div className="img-box">
                                            <img src={require('../.././cabbage.jpg')} alt="Cabbage" width={80} className="product-img" />
                                        </div>

                                        <div className="detail">

                                            <h4 className="product-name">Cabbage 1 Pcs</h4>

                                            <div className="wrapper">


                                                <div className="product-qty">
                                                    <button id="decrement">
                                                        <ion-icon name="remove-outline"></ion-icon>
                                                    </button>

                                                    <span id="quantity">1</span>

                                                    <button id="increment">
                                                        <ion-icon name="add-outline"></ion-icon>
                                                    </button>
                                                </div>

                                                <div className="price">
                                                    $ <span id="price">0.80</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="product-close-btn">
                                            <ion-icon name="close-outline"></ion-icon>
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="wrapper">

                                {/*<div className="discount-token">

                                    <label htmlFor="token" className="label-default">Gift card/Discount code</label>

                                    <div className="wrapper-flex">

                                        <input type="text" name="discount-token" id="discount-token" className="input-default" />

                                        <button className="btn btn-outline">Apply</button>
                                    </div>
                                </div>*/}

                                <div className="amount">
                                    <h6>Order total</h6>
                                    <div className='totaldetails'>
                                        <div className="subtotal">
                                            <span>Subtotal</span> <span>XAF <span id="subtotal">2.05</span></span>
                                        </div>

                                        {/*<div className="tax">
                                        <span>Tax</span> <span>$ <span id="tax">0.10</span></span>
                                    </div>*/}

                                        <div className="shipping">
                                            <span>Delivery</span> <span>XAF <span id="shipping">2.05</span></span>
                                        </div>
                                    </div>
                                    <div className="total">
                                        <span>Total</span> <span>XAF <span id="subtotal">2.15</span></span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>


                </main>
            </>
        );
    }
}

export default CheckOutPageComponent;
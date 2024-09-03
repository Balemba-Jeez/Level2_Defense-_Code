import React, { Component } from 'react';
import '../../PagesStyles/BusinessPageStyles/checkOutPageComponent.css'

class CheckOutPageComponent extends Component {
    state = {}
    render() {
        return (
            <>
                <main className='container'>
                    <h1 className='heading'>
                        <ion-icon name="cart-outline"></ion-icon> Shopping Cart
                    </h1>

                    <div className='item-flex'>
                        {/**
                           *Checkout section 
                          */}


                        <section className="checkout">

                            <h2 className="section-heading">Payment details</h2>

                            <div className="payment-form">


                                <div className="payment-method">

                                    <button className='method selected'>
                                        <ion-icon name="card"></ion-icon>

                                        <span>Credit card</span>

                                        <ion-icon className="checkmark" name="checkmark-circle"></ion-icon>
                                    </button>


                                    <button className='method'>
                                        <ion-icon name="card"></ion-icon>

                                        <span>Paypal</span>

                                        <ion-icon className="checkmark" name="checkmark-circle-outline"></ion-icon>
                                    </button>

                                </div>

                                <form action="#">

                                    <div className="cardholder-name">
                                        <label htmlFor="cardholder-name" className="label-default">Cardholder name</label>

                                        <input type="text" id='cardholder-name' name='cardholder-name' className="input-default" />
                                    </div>

                                    <div className="card-number">
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
                                    </div>
                                </form>
                            </div>

                            <button className='btn btn-primary'>
                                <b>Pay</b> $ <span id='payAmount'>2.15</span>
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

                                        <button id="product-close-btn">
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

                                        <button id="product-close-btn">
                                            <ion-icon name="close-outline"></ion-icon>
                                        </button>
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
import React, { Component } from 'react';
import '../../PagesStyles/BusinessPageStyles/checkOutPageComponent.css'

class CheckOutPageComponent extends Component {

    state = {
        cart: [],
        deliveryPricing: {},
        selectedSupplierId: null,
        selectedPaymentMethod: '', // Track the selected payment method
    };

    componentDidMount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.setState({ cart });

        // Retrieve delivery pricing from localStorage
        const deliveryPricing = JSON.parse(localStorage.getItem('deliveryPricing')) || {};

        // Retrieve selected supplier ID from localStorage
        let selectedSupplierId = localStorage.getItem('selectedSupplierId');

        // Set a fallback value for selectedSupplierId if it's null
        if (!selectedSupplierId) {
            selectedSupplierId = '1';  // Default value
            localStorage.setItem('selectedSupplierId', selectedSupplierId);
        }

        // Update state with a callback to ensure state is set before logging
        this.setState({ deliveryPricing, selectedSupplierId }, () => {
            console.log(`deliveryPricing is`, this.state.deliveryPricing);
            console.log(`selectedSupplierId is`, this.state.selectedSupplierId);

            // Get the delivery price, ensuring it's a number
            const selectedSupplierId = this.state.selectedSupplierId;
            const deliveryPrice = this.state.deliveryPricing[selectedSupplierId]
                ? parseFloat(this.state.deliveryPricing[selectedSupplierId])
                : 0;

            console.log(`deliveryPrice is`, deliveryPrice);

            // Update state or apply `toFixed` only if deliveryPrice is a valid number
            this.setState({ deliveryPrice: deliveryPrice.toFixed(2) }); // Assuming you want 2 decimal places
        });

    }


    handleIncrement = (index) => {
        const newCart = [...this.state.cart];
        newCart[index].quantity += 1;
        this.setState({ cart: newCart }, this.updateLocalStorage);
    };


    handleDecrement = (index) => {
        const newCart = [...this.state.cart];
        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1;
            this.setState({ cart: newCart }, this.updateLocalStorage);
        }
    };


    handleRemoveItem = (index) => {
        const newCart = this.state.cart.filter((_, i) => i !== index);
        this.setState({ cart: newCart }, () => {
            this.updateLocalStorage();
            // Reset payment method if the cart is empty
            if (newCart.length === 0) {
                this.setState({ selectedPaymentMethod: '' });
            }
        });
    };

    updateLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    };

    // Handle the payment method selection
    handlePaymentSelection = (method) => {
        this.setState({ selectedPaymentMethod: method });
    };


    render() {

        const { cart, selectedPaymentMethod } = this.state;

        // Ensure totalAmount is a valid number
        const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0) || 0;

        console.log(`deliveryPrice is ${this.state.deliveryPricing[this.state.selectedSupplierId]}`);

        // If the cart is empty, set deliveryPrice to 0
        const deliveryPrice = cart.length > 0
            ? parseFloat(this.state.deliveryPricing[this.state.selectedSupplierId]) || 0
            : 0;

        // Ensure totalWithDelivery is a valid number
        const totalWithDelivery = (totalAmount + deliveryPrice).toFixed(2);


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

                                    {/* Mobile Money Button */}
                                    <button

                                        className={`method mtn ${selectedPaymentMethod === 'mtn' ? 'selected-mtn' : ''}`}
                                        onClick={() => this.handlePaymentSelection('mtn')}

                                    >
                                        {/*<ion-icon name="card"></ion-icon>*/}

                                        <img src={require('../../mobilemoney.png')} alt="mobile money logo" />

                                        <span>Mobile money</span>

                                        {/*<ion-icon className="checkmark fill" name="checkmark-circle"></ion-icon>*/}
                                    </button>

                                    {/* Orange Money Button */}
                                    <button

                                        className={`method orang ${selectedPaymentMethod === 'orange' ? 'selected-orange' : ''}`}
                                        onClick={() => this.handlePaymentSelection('orange')}

                                    >
                                        {/*<ion-icon name="logo-paypal"></ion-icon>*/}

                                        <img src={require('../../OrangeMoneymainlogo.jpg')} alt="Orange money logo" />

                                        <span>Orange money</span>

                                        {/*<ion-icon className="checkmark" name="checkmark-circle-outline"></ion-icon>*/}
                                    </button>

                                </div>

                                <form action="#">

                                    <div className="cardholder-name">
                                        <label htmlFor="cardholder-name" className="label-default">Account number</label>

                                        <input type="number" id='cardholder-name' name='cardholder-name' className="input-default" />
                                    </div>


                                </form>
                            </div>
                            <button className='btn btn-primary'>
                                <b>Pay</b> XAF <span id='payAmount'>{totalWithDelivery}</span>
                            </button>

                        </section>

                        {/**
                           *cart section 
                          */}

                        <section className="cart">

                            <div className="cart-item-box">

                                <h2 className="section-heading">Your items</h2>


                                {cart.length > 0 ? (
                                    cart.map((item, index) => (
                                        <div className="product-card" key={index}>
                                            <div className="card">
                                                <div className="img-box">
                                                    <img src={require('../.././tradex-gazcrop1.jpg')} alt={item.brand} width={80} className="product-img" />
                                                </div>
                                                <div className="detail">
                                                    <h4 className="product-name">{item.brand}</h4>
                                                    <div className="wrapper">
                                                        <div className="product-qty">

                                                            <button onClick={() => this.handleDecrement(index)} id="decrement">

                                                                <ion-icon name="remove-outline"></ion-icon>

                                                            </button>

                                                            <span id="quantity">{item.quantity}</span>

                                                            <button onClick={() => this.handleIncrement(index)} id="increment">

                                                                <ion-icon name="add-outline"></ion-icon>

                                                            </button>
                                                        </div>
                                                        <div className="price">
                                                            XAF <span id="price">{(item.price * item.quantity).toFixed(2)}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button className="product-close-btn" onClick={() => this.handleRemoveItem(index)}>

                                                    <ion-icon name="close-outline"></ion-icon>

                                                </button>

                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p id='emptynotification'>Your cart is empty.</p>
                                )}


                            </div>

                            <div className="wrapper">


                                <div className="amount">
                                    <h6>Order total</h6>
                                    <div className='totaldetails'>
                                        <div className="subtotal">
                                            <span>Subtotal</span> <span>XAF <span id="subtotal">{totalAmount.toFixed(2)}</span></span>
                                        </div>

                                        {/*<div className="tax">
                                        <span>Tax</span> <span>$ <span id="tax">0.10</span></span>
                                    </div>*/}

                                        <div className="shipping">
                                            <span>Delivery</span> <span>XAF <span id="shipping">{deliveryPrice.toFixed(2)}</span></span>
                                        </div>
                                    </div>
                                    <div className="total">
                                        <span>Total</span> <span>XAF <span id="subtotal">{totalWithDelivery}</span></span>
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
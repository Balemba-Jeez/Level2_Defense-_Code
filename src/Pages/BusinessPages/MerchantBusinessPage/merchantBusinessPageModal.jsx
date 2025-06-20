import React, { Component } from 'react';
import '../../../PagesStyles/BusinessPageStyles/merchantBusinessPageModal.css'

class MerchantBusinessPageModal extends Component {
    constructor(props) {
        super(props);
        // Initialize state with quantity and total price
        this.state = {
            quantity: 1,
            totalPrice: props.bottle.price
        };
    }


    // Function to increase the quantity
    increaseQuantity = () => {
        this.setState(prevState => {
            const newQuantity = prevState.quantity + 1;
            return {
                quantity: newQuantity,
                totalPrice: newQuantity * this.props.bottle.price
            };
        });
    };

    // Function to decrease the quantity
    decreaseQuantity = () => {
        this.setState(prevState => {
            if (prevState.quantity > 1) {
                const newQuantity = prevState.quantity - 1;
                return {
                    quantity: newQuantity,
                    totalPrice: newQuantity * this.props.bottle.price
                };
            }
            return prevState;
        });
    };


    // Function to handle adding to cart
    handleAddToCart = () => {
        const { bottle, addToCart, closeModal } = this.props; // Destructure props
        const { quantity, totalPrice } = this.state;

        // Call the addToCart function passed from parent
        addToCart(bottle, quantity, totalPrice);

        // Close the modal after adding to cart
        closeModal();
    };


    render() {

        const { bottle, closeModal } = this.props; // Destructure bottle from props
        const { quantity, totalPrice } = this.state;

        //console.log('bottleDetails:', bottle);

        return (
            <div className="modalbackground">
                <div className='modal'>
                    <div className='modalleft'>
                        <img src={require('../../../tradex-gazcrop1.jpg')} alt="" />
                    </div>

                    <div className='modalright'>
                        <div className='text'>
                            <div className='cancelbutton'>
                                <img src={require('../../../cancelicon1.jpg')} alt="cancel"
                                    onClick={this.props.closeModal} // Close modal on image click
                                    //style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
                                    onClick={closeModal} // Close modal on image click
                                />
                            </div>

                            {/* Display dynamic gas item information */}
                            <h2>{bottle.brand || 'Gas Item'}</h2>
                            <p>{`${bottle.weight} kg of ${bottle.brand}, priced at ${bottle.price} XAF`}</p>
                        </div>

                        <div className='button'>
                            <div className='quantitybox'>
                                <div className='minus' onClick={this.decreaseQuantity}>
                                    -
                                </div>
                                <p>{quantity}</p>
                                <div className='plus' onClick={this.increaseQuantity}>
                                    +
                                </div>
                            </div>
                            {/* Add an onClick event to handle adding to cart */}
                            <button onClick={this.handleAddToCart}>Add <span>{quantity}</span> to cart <span id='separator'></span> <span>{totalPrice}</span>XAF</button>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default MerchantBusinessPageModal;
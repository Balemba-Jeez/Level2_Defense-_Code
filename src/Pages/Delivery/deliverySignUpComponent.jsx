import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliverySignUpComponent.css';

class DeliverySignUpComponent extends Component {
    state = {}
    render() {
        return (
            <div className='deliverysignupcomponent'>
                <a href=''>
                    <img src={require('../../signoutlogoblack.png')} alt="translate icon" />
                    <p>Sign Up</p>
                </a>
            </div>
        );
    }
}

export default DeliverySignUpComponent;
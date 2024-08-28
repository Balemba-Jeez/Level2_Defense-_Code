import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/rightDeliveryPersonSignUpSection.css';

class RightDeliveryPersonSignUpSection extends Component {
    state = {}
    render() {
        return (
            <div className='rightdeliverypersonsignupection'>
                <img src={require('../../deliverydriver1.jpg')} alt="Delivery driver photo" />
            </div>
        );
    }
}

export default RightDeliveryPersonSignUpSection;


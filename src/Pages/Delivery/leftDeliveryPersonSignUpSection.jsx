import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/leftDeliveryPersonSignUpSection.css';
import LeftDeliveryPersonTextScript from './leftDeliveryPersonTextScript'

class LeftDeliveryPersonSignUpSection extends Component {
    state = {}
    render() {
        return (
            <div className='leftdeliverypersonsignupsection'>
                <LeftDeliveryPersonTextScript />
            </div>
        );
    }
}

export default LeftDeliveryPersonSignUpSection;
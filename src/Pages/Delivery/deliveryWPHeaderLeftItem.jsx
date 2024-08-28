import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliveryWPHeaderLeftItem.css';
import DeliveryTranslateComponent from './deliveryTranslateComponent';
import DeliveryPersonLoginComponent from './deliveryLoginComponent';
import DeliverySignUpComponent from './deliverySignUpComponent';

class DeliveryPersonWPHeaderLeftItem extends Component {
    state = {}
    render() {
        return (
            <div className='deliverypersonwpheaderleftitem'>
                <DeliveryTranslateComponent />
                <DeliveryPersonLoginComponent />
                <DeliverySignUpComponent />
            </div>
        );
    }
}

export default DeliveryPersonWPHeaderLeftItem;
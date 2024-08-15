import React, { Component } from 'react';
import AddressInputComponent from './addressInputComponent';
import '../ComponentStyles/orderDeliveryComponent.css'

class OrderDeliveryComponent extends Component {
    state = {}
    render() {
        return (
            <div className='orderdeliverycomponent'>
                <h1>Order delivery near you</h1>
                {<AddressInputComponent />}
            </div>
        );
    }
}

export default OrderDeliveryComponent;
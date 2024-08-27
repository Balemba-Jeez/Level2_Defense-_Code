import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliverySignOutComponent.css';

class DeliverySignOutComponent extends Component {
    state = {}
    render() {
        return (
            <div className='deliverysignoutcomponent'>
                <a href=''>
                    <img src={require('../../signoutlogoblack.png')} alt="translate icon" />
                    <p>Sign Out</p>
                </a>
            </div>
        );
    }
}

export default DeliverySignOutComponent;
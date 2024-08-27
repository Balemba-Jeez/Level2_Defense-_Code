import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliverySubAppHeaderLeftItem.css';
import DeliverySignOutComponent from './deliverySignOutComponent';

class DeliverySubAppHeaderLeftItem extends Component {
    state = {}
    render() {
        return (
            <div className='deliverysubappheaderleftitem'>
                <DeliverySignOutComponent />
            </div>
        );
    }
}

export default DeliverySubAppHeaderLeftItem;
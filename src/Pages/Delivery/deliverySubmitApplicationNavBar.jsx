import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliverySubmitApplicationNavBar.css'
import DeliverySubAppHeaderRightItem from './deliverySubAppHeaderRightItem';
import DeliverySubAppHeaderLeftItem from './deliverySubAppHeaderLeftItem';

class DeliverySubmitApplicationNavBar extends Component {
    state = {}
    render() {
        return (
            <div className='deliverysubmitapplicationnavbar'>
                <DeliverySubAppHeaderRightItem />
                <DeliverySubAppHeaderLeftItem />

            </div>
        );
    }
}

export default DeliverySubmitApplicationNavBar;
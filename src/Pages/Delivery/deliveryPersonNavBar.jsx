import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliveryNavBar.css'
import DeliveryPersonWPHeaderRightItem from '../Delivery/deliveryWPHeaderRighItem';
import DeliveryPersonWPHeaderLeftItem from '../Delivery/deliveryWPHeaderLeftItem';

class DeliveryPersonNavBar extends Component {
    state = {
    }
    render() {
        return (
            <div className='deliverynavbar'>
                <DeliveryPersonWPHeaderRightItem />
                <DeliveryPersonWPHeaderLeftItem />
            </div>
        );
    }
}

export default DeliveryPersonNavBar;
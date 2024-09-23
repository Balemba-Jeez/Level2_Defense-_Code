import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliveryWPHeaderRightItem.css';


class DeliveryWPHeaderRightItem extends Component {
    state = {

    }

    render() {

        return (
            <div className='deliverywpheaderightitem'>
                <div>
                    <img src={require('../../submitapplogo.png')} alt='Gas Space Logo' />
                    <p>Gas <span>Space</span></p>
                </div>
                <p className='deliverytext'>for deliverys</p>
            </div>
        );
    }
}

export default DeliveryWPHeaderRightItem;
import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliverySubAppHeaderRightItem.css';


class DeliverySubAppHeaderRightItem extends Component {
    state = {

    }

    render() {

        return (
            <div className='deliverysubappheaderightitem'>
                <div>
                    <img src='../../submitapplogo.png' alt='Gas Space Logo' />
                    <p>Gas <span>Space</span></p>
                </div>
                <p className='deliverytext'>for deliverys</p>
            </div>
        );
    }
}

export default DeliverySubAppHeaderRightItem;
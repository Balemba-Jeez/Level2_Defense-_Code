import React, { Component } from 'react';
import OrderDeliveryComponent from './orderDeliveryComponent';
import '../ComponentStyles/setAddressSectionComponent.css';

class SetAddressSectionComponent extends Component {
    state = {}
    render() {
        return (
            <div className='setaddresssectioncomponent'>
                <OrderDeliveryComponent />
                <div className='paymentoptions'>
                    <img src="MTN-MOMOmainlogo.jpg" alt="momo logo" />
                    <img src="OrangeMoneymainlogo.jpg" alt="momo logo" />
                </div>
            </div>
        );
    }
}

export default SetAddressSectionComponent;
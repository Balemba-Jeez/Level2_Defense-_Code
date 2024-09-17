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
                    <img src={require('../MTN-MOMOmainlogo.jpg')} alt='Gas Space Logo' />
                    <img src={require('../OrangeMoneymainlogo.jpg')} alt='Gas Space Logo' />
                </div>
            </div>
        );
    }
}

export default SetAddressSectionComponent;
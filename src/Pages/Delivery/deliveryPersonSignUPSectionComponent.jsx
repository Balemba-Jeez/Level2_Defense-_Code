import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliveryPersonSignUpSectionComponent.css'
import LeftDeliveryPersonSignUpSection from './leftDeliveryPersonSignUpSection';
import RightDeliveryPersonSignUpSection from './rightDeliveryPersonSignUpSection';


class DeliveryPersonSignUpSectionComponent extends Component {
    state = {}
    render() {
        return (
            <div className='deliverypersonsignupsectioncomponent'>
                <LeftDeliveryPersonSignUpSection />
                <RightDeliveryPersonSignUpSection />
            </div>
        );
    }
}

export default DeliveryPersonSignUpSectionComponent;
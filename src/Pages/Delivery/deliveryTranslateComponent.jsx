import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliveryTranslateComponent.css';

class DeliveryTranslateComponent extends Component {
    state = {}
    render() {
        return (
            <div className='deliverytranslatecomponent'>
                <button>
                    <img src="globeicomain1.png" alt="translate icon" />
                    <p>EN</p>
                </button>
            </div>
        );
    }
}

export default DeliveryTranslateComponent;
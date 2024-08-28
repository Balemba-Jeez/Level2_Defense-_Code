import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliveryPersonWelcomePage.css';
import DeliveryPersonNavBar from './deliveryPersonNavBar';
import DeliveryPersonSignUpSectionComponent from './deliveryPersonSignUPSectionComponent';



class DeliveryPersonWelcomePage extends Component {
    state = {
    }
    render() {

        return (
            <div className='deliverypersonwelcomepage'>
                <DeliveryPersonNavBar />
                <DeliveryPersonSignUpSectionComponent />

                <div className='deliverypersonwelcomepagehowto'>
                    <div>
                        <h2>How food delivery driving works</h2>
                    </div>


                </div>
            </div>
        );
    }
}

export default DeliveryPersonWelcomePage;
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

                {/*<div className='deliverypersonwelcomepagehowto'>
                    <div className='deliverypersonwelcomepagehowtotext'>
                        <h2>How food delivery driving works</h2>

                        <p>If you’re new to our platform, you’ll need to sign up as a delivery person and upload the necessary documents and a photo. Once you're approved and notified, you can start receiving delivery requests. Our web platform provides resources to help you learn and succeed as you go.</p>
                    </div>


                </div>*/}
            </div>
        );
    }
}

export default DeliveryPersonWelcomePage;
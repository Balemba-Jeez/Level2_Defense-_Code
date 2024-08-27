import React, { Component } from 'react';

import '../../PagesStyles/deliveryPageStyles/deliverySubmitApplication.css'
import DeliverySubmitApplicationNavBar from './deliverySubmitApplicationNavBar.jsx'


class DeliverySubmitApplication extends Component {
    state = {}
    render() {
        return (
            <div className='deliverysubmitapplication'>

                <DeliverySubmitApplicationNavBar />
                <div className='deliverysubmitapplicationoptionsection'>
                    <div className='deliverysubmitapplicationoptionsectiontext'>
                        <h3>Welcome, User name</h3>
                        <p>Here's what you need to do to set up your account.</p>
                    </div>

                    <div className='deliverysubmitapplicationoption'>

                        <a href="/delivery/submitapplication/deliverypersonphoto">
                            <div className='deliverysubmitapplicationoptiontype'>

                                <div className='deliverysubmitapplicationoptiontypeleft'>
                                    <p>Driver photo</p>
                                    <p>Recommended step</p>
                                </div>

                                <img src={require('../../fast-forwardicon.png')} alt="Arrow" />

                            </div>
                        </a>

                        <a href="/delivery/submitapplication/deliverypersonDriverLicense">
                            <div className='deliverysubmitapplicationoptiontype'>

                                <div className='deliverysubmitapplicationoptiontypeleft'>
                                    <p>Driver's license</p>
                                    <p>Recommended step</p>
                                </div>

                                <img src={require('../../fast-forwardicon.png')} alt="Arrow" />

                            </div>
                        </a>

                        <a href="/delivery/submitapplication/deliverypersonVehicleRegistrationCard">
                            <div className='deliverysubmitapplicationoptiontype'>

                                <div className='deliverysubmitapplicationoptiontypeleft'>
                                    <p>Vehicle registration card</p>
                                    <p>Recommended step</p>
                                </div>

                                <img src={require('../../fast-forwardicon.png')} alt="Arrow" />

                            </div>
                        </a>

                        <a href="/delivery/submitapplication/deliverypersonInsurance">
                            <div className='deliverysubmitapplicationoptiontype'>

                                <div className='deliverysubmitapplicationoptiontypeleft'>
                                    <p>Insurance</p>
                                    <p>Recommended step</p>
                                </div>

                                <img src={require('../../fast-forwardicon.png')} alt="Arrow" />

                            </div>
                        </a>

                        <a href="/delivery/submitapplication/deliverypersonVisitetechnique">
                            <div className='deliverysubmitapplicationoptiontype'>

                                <div className='deliverysubmitapplicationoptiontypeleft'>
                                    <p>Visite technique</p>
                                    <p>Recommended step</p>
                                </div>

                                <img src={require('../../fast-forwardicon.png')} alt="Arrow" />

                            </div>
                        </a>

                        <a href="/delivery/submitapplication/deliverypersonIDCard">
                            <div className='deliverysubmitapplicationoptiontype'>

                                <div className='deliverysubmitapplicationoptiontypeleft'>
                                    <p>ID card</p>
                                    <p>Recommended step</p>
                                </div>

                                <img src={require('../../fast-forwardicon.png')} alt="Arrow" />

                            </div>
                        </a>


                    </div>

                </div>
            </div>
        );
    }
}

export default DeliverySubmitApplication;
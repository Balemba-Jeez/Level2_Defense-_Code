import React, { Component } from 'react';

import '../../PagesStyles/merchantPageStyles/merchantSubmitApplication.css'
import MerchantSubmitApplicationNavBar from './merchantSubmitApplicationNavBar.jsx'


class MerchantSubmitApplication extends Component {
    state = {}
    render() {
        return (
            <div className='merchantsubmitapplication'>

                <MerchantSubmitApplicationNavBar />
                <div className='merchantsubmitapplicationoptionsection'>
                    <div className='merchantsubmitapplicationoptionsectiontext'>
                        <h3>Welcome, User name</h3>
                        <p>Here's what you need to do to set up your account.</p>
                    </div>

                    <div className='merchantsubmitapplicationoption'>

                        <a href="/merchant/submitapplication/merchantphoto">
                            <div className='merchantsubmitapplicationoptiontype'>

                                <div className='merchantsubmitapplicationoptiontypeleft'>
                                    <p>Merchant photo</p>
                                    <p>Recommended step</p>
                                </div>

                                <img src={require('../../fast-forwardicon.png')} alt="Arrow" />

                            </div>
                        </a>


                        <a href="/merchant/submitapplication/Business license">
                            <div className='merchantsubmitapplicationoptiontype'>

                                <div className='merchantsubmitapplicationoptiontypeleft'>
                                    <p>Business license</p>
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

export default MerchantSubmitApplication;
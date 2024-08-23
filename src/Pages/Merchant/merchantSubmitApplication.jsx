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

                        <a href="">
                            <div className='merchantsubmitapplicationoptiontype'>

                                <div className='merchantsubmitapplicationoptiontypeleft'>
                                    <p>Business License</p>
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
import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/merchantWelcomePage.css';
import MerchantNavBar from './merchantNavBar';
import MerchantSignUpSectionComponent from './merchantSignUPSectionComponent';



class MerchantWelcomePage extends Component {
    state = {
    }
    render() {

        return (
            <div className='merchantwelcomepage'>
                <MerchantNavBar />
                <MerchantSignUpSectionComponent />
            </div>
        );
    }
}

export default MerchantWelcomePage;
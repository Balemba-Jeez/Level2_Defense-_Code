import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/merchantWelcomePage.css';
import MerchantNavBar from './merchantNavBar';

class MerchantWelcomePage extends Component {
    state = {}
    render() {
        return (
            <div className='merchantwelcomepage'>
                <MerchantNavBar />
            </div>
        );
    }
}

export default MerchantWelcomePage;
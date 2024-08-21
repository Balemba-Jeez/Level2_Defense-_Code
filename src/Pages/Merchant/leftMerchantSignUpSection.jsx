import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/leftMerchantSignUpSection.css';
import LeftTextScript from './leftTextScript'

class LeftMerchantSignUpSection extends Component {
    state = {}
    render() {
        return (
            <div className='leftmerchantsignupsection'>
                <LeftTextScript />
            </div>
        );
    }
}

export default LeftMerchantSignUpSection;
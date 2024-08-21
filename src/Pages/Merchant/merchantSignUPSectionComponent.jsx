import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/merchantSignUpSectionComponent.css'
import LeftMerchantSignUpSection from './leftMerchantSignUpSection';
import RightMerchantSignUpSection from './rightMerchantSignUpSection';


class MerchantSignUpSectionComponent extends Component {
    state = {}
    render() {
        return (
            <div className='merchantsignupsectioncomponent'>
                <LeftMerchantSignUpSection />
                <RightMerchantSignUpSection />
            </div>
        );
    }
}

export default MerchantSignUpSectionComponent;
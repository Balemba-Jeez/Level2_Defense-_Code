import React, { Component } from 'react';
import '../../../PagesStyles/BusinessPageStyles/merchantBusinessPageScreenSizeSectionComponent.css';
import MerchantBusinessPageHeaderComponent from './merchantBusinessPageHeaderComponent';
import MerchantBusinessPageSetAddressSectionComponent from './merchantBusinessPageSetAddressSectionComponent';

class MerchantBusinessPageScreenSizeSectionComponent extends Component {
    state = {}
    render() {
        return (
            <div className='merchantbusinesspagescreensizesectioncomponent'>
                <MerchantBusinessPageHeaderComponent />
                <MerchantBusinessPageSetAddressSectionComponent />


            </div>
        );
    }
}

export default MerchantBusinessPageScreenSizeSectionComponent;
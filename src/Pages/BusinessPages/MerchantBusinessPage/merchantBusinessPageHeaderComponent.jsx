import React, { Component } from 'react';
import '../../../PagesStyles/BusinessPageStyles/merchantBusinessPageHeaderComponent.css'
import MerchantBusinessPageHeaderLeftItem from './merchantBusinessPageHeaderLeftItem';
import MerchantBusinessPageHeaderRightItem from './merchantBusinessPageHeaderRightItem';

class MerchantBusinessPageHeaderComponent extends Component {
    state = {}
    render() {
        return (
            <div className='merchantbusinesspageheaderComponent'>
                <MerchantBusinessPageHeaderRightItem />
                <MerchantBusinessPageHeaderLeftItem />

            </div>
        );
    }
}

export default MerchantBusinessPageHeaderComponent;
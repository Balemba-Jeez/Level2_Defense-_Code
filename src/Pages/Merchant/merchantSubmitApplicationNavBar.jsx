import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/merchantSubmitApplicationNavBar.css'
import MerchantSubAppHeaderRightItem from '../Merchant/merchantSubAppHeaderRightItem';
import MerchantSubAppHeaderLeftItem from '../Merchant/merchantSubAppHeaderLeftItem';

class MerchantSubmitApplicationNavBar extends Component {
    state = {}
    render() {
        return (
            <div className='merchantsubmitapplicationnavbar'>
                <MerchantSubAppHeaderRightItem />
                <MerchantSubAppHeaderLeftItem />

            </div>
        );
    }
}

export default MerchantSubmitApplicationNavBar;
import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/merchantNavBar.css'
import MerchantWPHeaderRightItem from '../Merchant/merchantWPHeaderRighItem';
import MerchantWPHeaderLeftItem from '../Merchant/merchantWPHeaderLeftItem';

class MerchantNavBar extends Component {
    state = {
    }
    render() {
        return (
            <div className='merchantnavbar'>
                <MerchantWPHeaderRightItem />
                <MerchantWPHeaderLeftItem />
            </div>
        );
    }
}

export default MerchantNavBar;
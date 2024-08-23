import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/merchantSubAppHeaderLeftItem.css';
import TranslateComponent from './translateComponent';
import MerchantSignOutComponent from './merchantSignOutComponent';

class MerchantSubAppHeaderLeftItem extends Component {
    state = {}
    render() {
        return (
            <div className='merchantsubappheaderleftitem'>
                <MerchantSignOutComponent />
            </div>
        );
    }
}

export default MerchantSubAppHeaderLeftItem;
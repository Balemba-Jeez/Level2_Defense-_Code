import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/merchantWPHeaderLeftItem.css';
import TranslateComponent from './translateComponent';
import MerchantLoginComponent from './merchantLoginComponent';

class MerchantWPHeaderLeftItem extends Component {
    state = {}
    render() {
        return (
            <div className='merchantwpheaderleftitem'>
                <TranslateComponent />
                <MerchantLoginComponent />

            </div>
        );
    }
}

export default MerchantWPHeaderLeftItem;
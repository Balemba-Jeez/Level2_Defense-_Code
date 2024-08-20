import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/merchantWPHeaderRightItem.css';

class MerchantWPHeaderRightItem extends Component {
    state = {}
    render() {
        return (
            <div className='merchantwpheaderightitem'>
                <div>
                    <img src='gas-cylinderwhite.png' alt='Gas Space Logo' />
                    <p>Gas <span>Space</span></p>
                </div>
                <p className='merchanttext'>for Merchants</p>
            </div>
        );
    }
}

export default MerchantWPHeaderRightItem;
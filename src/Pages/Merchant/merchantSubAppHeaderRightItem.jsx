import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/merchantSubAppHeaderRightItem.css';


class MerchantSubAppHeaderRightItem extends Component {
    state = {

    }

    render() {

        return (
            <div className='merchantsubappheaderightitem'>
                <div>
                    <img src='../../submitapplogo.png' alt='Gas Space Logo' />
                    <p>Gas <span>Space</span></p>
                </div>
                <p className='merchanttext'>for Merchants</p>
            </div>
        );
    }
}

export default MerchantSubAppHeaderRightItem;
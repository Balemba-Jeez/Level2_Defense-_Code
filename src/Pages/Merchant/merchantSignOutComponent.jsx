import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/merchantSignOutComponent.css';

class MerchantSignOutComponent extends Component {
    state = {}
    render() {
        return (
            <div className='merchantsignoutcomponent'>
                <a href=''>
                    <img src={require('../../signoutlogoblack.png')} alt="translate icon" />
                    <p>Sign Out</p>
                </a>
            </div>
        );
    }
}

export default MerchantSignOutComponent;
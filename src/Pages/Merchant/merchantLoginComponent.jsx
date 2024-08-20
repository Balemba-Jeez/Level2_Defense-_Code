import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/merchantLoginComponent.css';

class MerchantLoginComponent extends Component {
    state = {}
    render() {
        return (
            <div className='merchantlogincomponent'>
                <a href=''>
                    <img src="usericonmain1.png" alt="translate icon" />
                    <p>Log in</p>
                </a>
            </div>
        );
    }
}

export default MerchantLoginComponent;
import React, { Component } from 'react';
import '../../PagesStyles/ClientPageStyles/homeHeaderRightItem.css'
class HomeHeaderRightItem extends Component {
    state = {

        address: ""

    }

    componentDidMount() {
        const savedAddress = localStorage.getItem('address');
        if (savedAddress) {
            this.setState({ address: savedAddress });
        }
    }

    render() {
        return (
            <div className='homeheader_rightitem'>
                <div>
                    <button type='buttton' popovertarget="AsideBox" popovertargetaction="toggle">
                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">

                            <line x1="1" y1="3" x2="18" y2="3" />
                            <line x1="1" y1="10" x2="18" y2="10" />
                            <line x1="1" y1="17" x2="18" y2="17" />
                        </svg>
                    </button>

                    <div className='hmhdright'>
                        <img src={require('../../gas-cylinder11.png')} alt='Gas Space Logo' />
                        <p>Gas <span>Space</span></p>
                    </div>
                </div>

                <div className='address'>
                    <img src={require('../../clientlocationicon.png')} alt="" />
                    <p>
                        {this.state.address || 'Carrefour Regir'}
                        <img src={require('../../dropdownicon.png')} alt="" />
                    </p>

                </div>
            </div>
        );
    }
}

export default HomeHeaderRightItem;
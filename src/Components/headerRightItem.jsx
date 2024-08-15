import React, { Component } from 'react';
import '../ComponentStyles/headerRightItem.css'
class HeaderRightItem extends Component {
    state = {}
    render() {
        return (
            <div className='header_rightitem'>
                <div>
                    <button type='buttton' popovertarget="AsideBox" popovertargetaction="toggle">
                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">

                            <line x1="1" y1="3" x2="18" y2="3" />
                            <line x1="1" y1="10" x2="18" y2="10" />
                            <line x1="1" y1="17" x2="18" y2="17" />
                        </svg>
                    </button>

                    <div>
                        <img src='gas-cylinder11.png' alt='Gas Space Logo' />
                        <p>Gas <span>Space</span></p>
                    </div>
                </div>


            </div>
        );
    }
}

export default HeaderRightItem;
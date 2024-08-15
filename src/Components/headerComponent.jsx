import React, { Component } from 'react';
import '../ComponentStyles/headerComponent.css'
import HeaderLeftItem from './headerLeftItem';
import HeaderRightItem from './headerRightItem';

class HeaderComponent extends Component {
    state = {}
    render() {
        return (
            <div className='headerComponent'>
                <HeaderRightItem />
                <HeaderLeftItem />
            </div>
        );
    }
}

export default HeaderComponent;
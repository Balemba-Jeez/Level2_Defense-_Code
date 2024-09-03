import React, { Component } from 'react';
import '../../PagesStyles/ClientPageStyles/homeHeaderComponent.css'
import HomeHeaderLeftItem from './homeHeaderLeftItem';
import HomeHeaderRightItem from './homeHeaderRightItem';

class HomeHeaderComponent extends Component {
    state = {}
    render() {
        return (
            <div className='homeheaderComponent'>
                <HomeHeaderRightItem />
                <HomeHeaderLeftItem />

            </div>
        );
    }
}

export default HomeHeaderComponent;
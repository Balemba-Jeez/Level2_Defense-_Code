import React, { Component } from 'react';
import '../ComponentStyles/welcomeScreenSizeSectionComponent.css'
import HeaderComponent from './headerComponent';
import SetAddressSectionComponent from './setAddressSectionComponent';


class WelcomeScreenSizeSectionComponent extends Component {
    state = {}
    render() {
        return (
            <div className='welcomescreensizesectioncomponent'>
                <HeaderComponent />
                <SetAddressSectionComponent />
            </div>
        );
    }
}

export default WelcomeScreenSizeSectionComponent;
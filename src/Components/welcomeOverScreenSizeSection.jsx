import React, { Component } from 'react';
import '../ComponentStyles/welcomeOverScreenSizeSectionComponent.css';
import BusinessBenefitsSectionComponent from './businessBenefitsSectionComponent';
import QuartersNearMeSectionComponent from './quartersNearMeSectionComponent';
import RegionsNearMeSectionComponent from './regionsNearMeSectionComponent';

class WelcomeOverScreenSizeSectionComponent extends Component {
    state = {}
    render() {
        return (
            <div className='welcomeoverscreensizesectioncomponent'>
                <BusinessBenefitsSectionComponent />
                <QuartersNearMeSectionComponent />
                <RegionsNearMeSectionComponent />

            </div>
        );
    }
}

export default WelcomeOverScreenSizeSectionComponent;
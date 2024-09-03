import React, { Component } from 'react';
import '../../PagesStyles/ClientPageStyles/clientHomePage.css'
import HomeScreenSizeSectionComponent from './homeScreenSizeSectionComponent';
import HomeFooterComponent from './homeFooterComponent';
import HomeHeaderComponent from './homeHeaderComponent';
{/*import WelcomeOverScreenSizeSectionComponent from '../../Components/welcomeOverScreenSizeSection';*/ }

class ClientHomePage extends Component {
    state = {}
    render() {
        return (
            <div className='clienthomepage'>
                <HomeScreenSizeSectionComponent />
                {/*<WelcomeOverScreenSizeSectionComponent />*/}

                <HomeFooterComponent />
            </div>
        );
    }
}

export default ClientHomePage;
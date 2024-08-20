import React, { Component } from 'react';
import '../../PagesStyles/ClientPageStyles/clientWelcomePage.css'
import WelcomeScreenSizeSectionComponent from '../../Components/welcomeScreenSizeSectionComponent';
import WelcomeOverScreenSizeSectionComponent from '../../Components/welcomeOverScreenSizeSection'
import FooterComponent from '../../Components/footerComponent';

class ClientWelcomPage extends Component {
    state = {}
    render() {
        return (
            <div className='clientwelcomepage'>
                <WelcomeScreenSizeSectionComponent />
                <WelcomeOverScreenSizeSectionComponent />
                <FooterComponent />
            </div>
        );
    }
}

export default ClientWelcomPage;
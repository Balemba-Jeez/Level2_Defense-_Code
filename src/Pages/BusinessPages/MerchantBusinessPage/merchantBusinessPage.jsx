import React, { Component } from 'react';
import '../../../PagesStyles/BusinessPageStyles/merchantBusinessPage.css'
import MerchantBusinessPageScreenSizeSectionComponent from './merchantBusinessPageScreenSizeSectionComponent';
import MerchantBusinessPageFooterComponent from './merchantBusinessPageFooterComponent';
import MerchantBusinessPageHeaderComponent from './merchantBusinessPageHeaderComponent';
{/*import WelcomeOverScreenSizeSectionComponent from '../../Components/welcomeOverScreenSizeSection';*/ }

class MerchantBusinessPage extends Component {
    state = {}
    render() {
        return (
            <div className='merchantbusinesspage'>
                <MerchantBusinessPageScreenSizeSectionComponent />
                {/*<WelcomeOverScreenSizeSectionComponent />*/}

                <MerchantBusinessPageFooterComponent />
            </div>
        );
    }
}

export default MerchantBusinessPage;
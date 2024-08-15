import React, { Component } from 'react';
import '../ComponentStyles/footerComponent.css';

class FooterComponent extends Component {
    state = {}
    render() {
        return (
            <div className='footercomponent'>
                <div className='footertop'>

                    <div className='footertopleft'>

                        <div className='footerlogotext'>
                            <img src='gas-cylinder11.png' alt='Gas Space Logo' />
                            <p>Gas <span>Space</span></p>
                        </div>

                        <div className='footerdownloadbuttons'>
                            <a href="">
                                <img src="DownloadontheAppstore.jpeg" alt="Download on the Appstore image" />
                            </a>

                            <a href="">
                                <img src="GETITONGooglePlay.jpeg" alt="GET IT ON Google Play image" />
                            </a>
                        </div>
                    </div>

                    <div className='footerright'>
                        <table>
                            <tr>
                                <td>Add your gas business</td>
                                <td>View all regions</td>

                            </tr>
                            <tr>

                                <td>Sign up to deliver</td>
                                <td>View all quarters</td>
                            </tr>
                            <tr>
                                <td>Promotions</td>
                                <td>About Gas Space</td>
                            </tr>

                            <tr>
                                <td colSpan={"2"}>
                                    <img src="" alt="Translate icon" />
                                    <p>English</p>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>

            </div>
        );
    }
}

export default FooterComponent;
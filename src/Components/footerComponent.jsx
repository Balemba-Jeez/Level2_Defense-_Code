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
                            <img src={require('../gas-cylinder11.png')} alt='Gas Space Logo' />
                            <p>Gas <span>Space</span></p>
                        </div>

                        <div className='footerdownloadbuttons'>
                            <a href="">
                                <img src={require('../DownloadontheAppStore.jpeg')} alt="Download on the Appstore image" />
                            </a>

                            <a href="">
                                <img src={require('../GetITONGooglePlay.jpeg')} alt="GET IT ON Google Play image" />
                            </a>
                        </div>
                    </div>

                    <div className='footerright'>
                        <table>


                            <tr>

                                <td><a href="">Get Help</a></td>
                                <td><a href="">Gas Stores near me</a></td>
                            </tr>

                            <tr>

                                <td><a href="">Promotions</a></td>
                                <td><a href="">Sign up to deliver</a></td>
                            </tr>

                            <tr>

                                <td><a href=""></a></td>
                                <td><a href="">Add your gas business</a></td>
                            </tr>

                            <tr>

                                <td><a href=""></a></td>
                                <td><a href="">View all quarters</a></td>
                            </tr>
                            <tr>

                                <td><a href=""></a></td>
                                <td><a href="">View all regions</a></td>

                            </tr>
                            <tr>

                                <td><a href=""></a></td>
                                <td><a href="">About Gas Space</a></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>
                                    <a href=""><img src={require("../languageicon.png")} alt="Translate icon" /></a>
                                    <a href=""><p>English</p></a>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>

                <div className='footerbottom'>
                    <div className='footerbottombegin'>
                        <div className='bottomleft'>
                            <a href="">
                                <img src={require("../facebooklogo.png")} alt="Facebook logo" />

                            </a>

                            <a href="">
                                <img src={require("../twitterlogo.png")} alt="Facebook logo" />
                            </a>

                            <a href="">
                                <img src={require("../instagramlogo.png")} alt="Facebook logo" />
                            </a>

                        </div>

                        <div className='bottomright'>
                            <a href="">Privacy Policy</a>
                            <a href="">Terms</a>
                            <a href="">Pricing</a>
                            <a href="">Do not sell or share my personal information</a>
                        </div>
                    </div>
                    <div className='footerbottomend'>
                        <p>&copy; 2024 gas Space Ltd </p>

                        <p>This site is protected by reCAPTCHA and the
                            Google <a href="">Privacy Policy </a> and
                            <a href=""> Terms of Service</a> apply
                        </p>
                    </div>

                </div>

            </div>
        );
    }
}

export default FooterComponent;
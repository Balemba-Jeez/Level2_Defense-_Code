import React, { Component } from 'react';
import '../ComponentStyles/asideComponent.css'

class AsideComponent extends Component {
    state = {}
    render() {
        return (
            <div className='aside_component' popover id='AsideBox'>
                <div className='asideNavigateTop'>
                    <div className='aside_button'>
                        <a href='' className='aside_buttonsignUp'>Sign up</a>
                        <a href='' className='aside_buttonlogIn'>Log in</a>
                    </div>

                    <div className='aside_optionlist'>
                        <ul>
                            <li>
                                <a href="">Add your gas business</a>
                            </li>
                            <li>
                                <a href="">Sign up to deliver</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className='asideNavigateBottom'>
                    <div className='aside_appAnticipation'>
                        <img src='demologo.jpg' alt='Gas Space Logo' />
                        <p>More features coming soon in our app</p>
                    </div>

                    <div className='aside_downloadbutton'>
                        <a href='' className='aside_Iphonedownloadbutton'>
                            <img src="applelogo.png" alt="iphone logo" />
                            <p>iPhone</p>
                        </a>
                        <a href='' className='aside_Androiddownloadbutton'>
                            <img src="androidlogo.png" alt="iphone logo" />
                            <p>Android</p>
                        </a>
                    </div>

                </div>

            </div>
        );
    }
}

export default AsideComponent;
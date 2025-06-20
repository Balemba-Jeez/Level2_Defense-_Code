import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/submitFormPageBsLi.css';
import MerchantSubAppHeaderRightItem from '../Merchant/merchantSubAppHeaderRightItem';

class SubmitFormPageBsLi extends Component {
    state = {}
    render() {
        return (
            <div className='submitformppagebsli'>

                <div className='submitformppagebsliheader'>

                    <div className='submitformppagebsliheaderleft' >
                        <button>
                            <img src={require('../../arrowiconmain.png')} alt="Arrow icon" className='arrowicon' />
                        </button>

                        <MerchantSubAppHeaderRightItem />
                    </div>
                </div>

                <div className='submitformppagebslibody'>

                    <div className='Submitformpagebslitext'>
                        <h3>Take a photo of your Business license</h3>
                        <div>
                            <p>Photograph all sides of your business license. Ensure that all important details, including <br /> any identification numbers, are clearly visible in the images</p>
                        </div>
                    </div>

                    <div className='Submitformpagebslilist'>
                        <ol>
                            <li>Make sure that document is <span>not expired</span>  and your upload a <span>clear picture</span></li>
                            {/*<li>photos with filters, alterations, or pictures of another photo</li>
                            <li>Ensure your face is directly visible, with your eyes and mouth unobstructed</li>
                            <li>Make sure the photo is well-lit, without glare, shadows, or blur, and shows your face clearly</li>*/}

                        </ol>
                    </div>

                    <div className='Submitformpagebsliinput'>
                        <div className='Submitformpagebsliinputimage'>

                            <img src={require('../../businesslicense.jpeg')} alt="Image Demonstration" />

                        </div>

                        <div className='Submitformpagebsliinputbutton'>
                            <div className='firstchild'>
                                <label htmlFor="merchantphoto">
                                    <img src={require('../../chooseimageicon.png')} alt="" />
                                    <span>Choose photo</span>

                                </label>
                                <input type="file" name="merchantphoto" id="merchantphoto" />
                            </div>

                        </div>

                    </div>

                </div>

                <div className='submitformppagebslifooter'>
                    <button type="submit" >Submit</button>
                </div>

            </div>
        );
    }
}

export default SubmitFormPageBsLi;
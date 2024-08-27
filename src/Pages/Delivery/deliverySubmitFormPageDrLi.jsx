import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliverySubmitFormpageDrLi.css';
import DeliverySubAppHeaderRightItem from '../Delivery/deliverySubAppHeaderRightItem';

class DeliverySubmitFormPageDrLi extends Component {
    state = {}
    render() {
        return (
            <div className='deliverysubmitformpagedrli'>

                <div className='deliverysubmitformppageheaderdrli'>

                    <div className='deliverysubmitformppageheaderdrlileft' >
                        <button>
                            <img src={require('../../arrowiconmain.png')} alt="Arrow icon" className='arrowicon' />
                        </button>

                        <DeliverySubAppHeaderRightItem />
                    </div>
                </div>

                <div className='deliverysubmitformppagebodydrli'>

                    <div className='deliverysubmitformpagedrlitext'>
                        <h3>Take a photo of your Driver's license</h3>
                        <div>
                            <p>Photograph both sides of your driver's license. Ensure that all important details, including <br /> the license number, are clearly visible in the images</p>
                        </div>
                    </div>

                    <div className='deliverysubmitformpagedrlilist'>
                        <ol>
                            <li>Make sure that document is <span>not expired</span> and your upload a <span>clear picture</span></li>
                            <li><span>DO NOT</span> upload irrelevant images (blank photos, selfies, or random pictures) – <span>Doing so will delay your account activation </span></li>
                            {/*<li>Ensure your face is directly visible, with your eyes and mouth unobstructed</li>
                            <li>Make sure the photo is well-lit, without glare, shadows, or blur, and shows your face clearly</li>*/}

                        </ol>
                    </div>

                    <div className='deliverysubmitformpagedrliinput'>
                        <div className='deliverysubmitformpagedrliinputimage'>

                            <img src={require('../../drivinglicensephoto1.jpg')} alt="Image Demonstration" />

                        </div>

                        <div className='deliverysubmitformpagedrliinputbutton'>
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

                <div className='deliverysubmitformppagefooterdrli'>
                    <button type="submit" >Submit</button>
                </div>

            </div>
        );
    }
}

export default DeliverySubmitFormPageDrLi;
import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliverySubmitFormpageVeRC.css';
import DeliverySubAppHeaderRightItem from './deliverySubAppHeaderRightItem';

class DeliverySubmitFormPageVeRC extends Component {
    state = {}
    render() {
        return (
            <div className='deliverysubmitformpageverc'>

                <div className='deliverysubmitformppageheaderverc'>

                    <div className='deliverysubmitformppageheadervercleft' >
                        <button>
                            <img src={require('../../arrowiconmain.png')} alt="Arrow icon" className='arrowicon' />
                        </button>

                        <DeliverySubAppHeaderRightItem />
                    </div>
                </div>

                <div className='deliverysubmitformppagebodyverc'>

                    <div className='deliverysubmitformpageverctext'>
                        <h3>Take a photo of your Vehicle's Registration Card</h3>
                        <div>
                            <p>Photograph both sides of your vehicle registration card. Ensure that all important details, including <br /> the registration number, are clearly visible in the images</p>
                        </div>
                    </div>

                    <div className='deliverysubmitformpageverclist'>
                        <ol>
                            <li>Make sure that document is <span>not expired</span> and your upload a <span>clear picture</span></li>
                            <li><span>DO NOT</span> upload irrelevant images (blank photos, selfies, or random pictures) – <span>Doing so will delay your account activation </span></li>
                            {/*<li>Ensure your face is directly visible, with your eyes and mouth unobstructed</li>
                            <li>Make sure the photo is well-lit, without glare, shadows, or blur, and shows your face clearly</li>*/}

                        </ol>
                    </div>

                    <div className='deliverysubmitformpagevercinput'>
                        <div className='deliverysubmitformpagevercinputimage'>

                            <img src={require('../../vehicleregistrationcardphoto1.jpg')} alt="Image Demonstration" />

                        </div>

                        <div className='deliverysubmitformpagevercinputbutton'>
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

                <div className='deliverysubmitformppagefooterverc'>
                    <button type="submit" >Submit</button>
                </div>

            </div>
        );
    }
}

export default DeliverySubmitFormPageVeRC;
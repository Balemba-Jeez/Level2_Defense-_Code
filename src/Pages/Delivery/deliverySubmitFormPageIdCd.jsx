import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliverySubmitFormpageIdCd.css';
import DeliverySubAppHeaderRightItem from '../Delivery/deliverySubAppHeaderRightItem';

class DeliverySubmitFormPageIdCd extends Component {
    state = {}
    render() {
        return (
            <div className='deliverysubmitformpageidcd'>

                <div className='deliverysubmitformppageheaderidcd'>

                    <div className='deliverysubmitformppageheaderidcdleft' >
                        <button>
                            <img src={require('../../arrowiconmain.png')} alt="Arrow icon" className='arrowicon' />
                        </button>

                        <DeliverySubAppHeaderRightItem />
                    </div>
                </div>

                <div className='deliverysubmitformppagebodyidcd'>

                    <div className='deliverysubmitformpageidcdtext'>
                        <h3>Take a photo of your National ID Card</h3>
                        <div>
                            <p>Photograph both sides of your ID card. Ensure that all important details, including your CNI number, are clearly visible in the images</p>
                        </div>
                    </div>

                    <div className='deliverysubmitformpageidcdlist'>
                        <ol>
                            <li>Make sure that document is <span>not expired</span> and your upload a <span>clear picture</span></li>
                            <li><span>MAKE SURE</span> that the <span>CNI number</span> of your document is <span>clear visible</span></li>
                            <li><span>DO NOT</span> upload irrelevant images (blank photos, selfies, or random pictures) – <span>Doing so will delay your account activation </span></li>
                            <li><span>MAKE SURE</span> the <span>photo</span> on your document shows your face clearly and visible</li>

                        </ol>
                    </div>

                    <div className='deliverysubmitformpageidcdinput'>
                        <div className='deliverysubmitformpageidcdinputimage'>

                            <img src={require('../../IDCardphoto.png')} alt="Image Demonstration" />

                        </div>

                        <div className='deliverysubmitformpageidcdinputbutton'>
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

                <div className='deliverysubmitformppagefooteridcd'>
                    <button type="submit" >Submit</button>
                </div>

            </div>
        );
    }
}

export default DeliverySubmitFormPageIdCd;
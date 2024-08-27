import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/deliverySubmitFormpageIns.css';
import DeliverySubAppHeaderRightItem from '../Delivery/deliverySubAppHeaderRightItem';

class DeliverySubmitFormPageIns extends Component {
    state = {}
    render() {
        return (
            <div className='deliverysubmitformpageins'>

                <div className='deliverysubmitformppageheaderins'>

                    <div className='deliverysubmitformppageheaderinsleft' >
                        <button>
                            <img src={require('../../arrowiconmain.png')} alt="Arrow icon" className='arrowicon' />
                        </button>

                        <DeliverySubAppHeaderRightItem />
                    </div>
                </div>

                <div className='deliverysubmitformppagebodyins'>

                    <div className='deliverysubmitformpageinstext'>
                        <h3>Take a photo of your Vehicle Insurance Policy</h3>
                        <div>
                            <p>Photograph both sides of your vehicle insurance card. Ensure that all important details, including the policy number, are clearly visible in the images</p>
                        </div>
                    </div>

                    <div className='deliverysubmitformpageinslist'>
                        <ol>
                            <li>Make sure that document is <span>not expired</span> and your upload a <span>clear picture</span></li>
                            <li><span>MAKE SURE</span> that the <span>Policy Number</span> of your document is <span>clear visible</span></li>
                            <li><span>DO NOT</span> upload irrelevant images (blank photos, selfies, or random pictures) – <span>Doing so will delay your account activation </span></li>
                            <li><span>We Accept</span> All insurance companies</li>

                        </ol>
                    </div>

                    <div className='deliverysubmitformpageinsinput'>
                        <div className='deliverysubmitformpageinsinputimage'>

                            <img src={require('../../VehicleInsurancePolicy.png')} alt="Image Demonstration" />

                        </div>

                        <div className='deliverysubmitformpageinsinputbutton'>
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

                <div className='deliverysubmitformppagefooterins'>
                    <button type="submit" >Submit</button>
                </div>

            </div>
        );
    }
}

export default DeliverySubmitFormPageIns;
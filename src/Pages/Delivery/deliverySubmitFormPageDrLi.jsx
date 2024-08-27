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
                        <h3>Take your profile photo</h3>
                        <div>
                            <p>Your profile photo helps people recognize you. Please note that once you submit <br /> your profile photo it cannot be changed.</p>
                        </div>
                    </div>

                    <div className='deliverysubmitformpagedrlilist'>
                        <ol>
                            <li>Select a clear and recent photo of yourself from your phone</li>
                            <li>Avoid photos with filters, alterations, or pictures of another photo</li>
                            <li>Ensure your face is directly visible, with your eyes and mouth unobstructed</li>
                            <li>Make sure the photo is well-lit, without glare, shadows, or blur, and shows your face clearly</li>

                        </ol>
                    </div>

                    <div className='deliverysubmitformpagedrliinput'>
                        <div className='deliverysubmitformpagedrliinputimage'>

                            <img src={require('../../profile_photo_global.png')} alt="Image Demonstration" />

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
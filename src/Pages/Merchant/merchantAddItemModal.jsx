import React from 'react'
import '../../PagesStyles/merchantPageStyles/merchantAddItemModal.css'
import MerchantSubAppHeaderRightItem from '../Merchant/merchantSubAppHeaderRightItem';

function MerchantAddItemModal() {
    return (
        <div className='AddItemformpage'>

            <div className='AddItemformppageheader'>

                <div className='AddItemformppageheaderleft' >
                    <button>
                        <img src={require('../../arrowiconmain.png')} alt="Arrow icon" className='arrowicon' />
                    </button>

                    <MerchantSubAppHeaderRightItem />
                </div>
            </div>

            <div className='AddItemformppagebody'>

                <div className='AddItemformpagetext'>
                    <h3>Add New Gas Bottle Item</h3>
                    {/*<div>
                        <p>Your profile photo helps people recognize you. Please note that once you AddItem <br /> your profile photo it cannot be changed.</p>
                    </div>*/}
                </div>

                {/*<div className='AddItemformpagelist'>
                    <ol>
                        <li>Select a clear and recent photo of yourself from your phone</li>
                        <li>Avoid photos with filters, alterations, or pictures of another photo</li>
                        <li>Ensure your face is directly visible, with your eyes and mouth unobstructed</li>
                        <li>Make sure the photo is well-lit, without glare, shadows, or blur, and shows your face clearly</li>

                    </ol>
                </div>*/}

                <div className='AddItemformppageinputselect'>
                    <div className='AddItemformpageinput'>
                        <div className='AddItemformpageinputimage'>

                            <img src={require('../../tradex-gazcrop1.jpg')} alt="Image Demonstration" />


                        </div>

                    </div>

                    <div className='AddItemformpageselect'>

                        <div className='selectitembox'>
                            <label htmlFor="gas-brands">
                                <img src={require('../../chooseimageicon.png')} alt="" />
                                <span>Select Brand</span>
                            </label>
                            <select name="gas-brands" id="gas-brands" size={"1"}


                            >
                                <option value="Afrique">Afrique</option>
                                <option value="Bocom">Bocom</option>
                                <option value="MRS">MRS</option>
                                <option value="Oilibya">Oilibya</option>
                                <option value="SCTM">SCTM</option>
                                <option value="Stargas">Stargas</option>
                                <option value="Total" selected>Total</option> {/*<!-- Default selected -->*/}
                                <option value="Tradex">Tradex</option>
                            </select>
                        </div>

                        <div className='selectitembox'>
                            <label htmlFor="gas-brands">
                                <img src={require('../../chooseimageicon.png')} alt="" />
                                <span>Select Weight</span>
                            </label>
                            <select name="gas-brands" id="gas-brands" size={"1"}


                            >
                                <option value="3kg">2.75 kg</option>
                                <option value="3kg">3 kg</option>
                                <option value="6kg">6 kg</option>
                                <option value="12.5kg" selected>12.5 kg</option> {/*<!-- Default selected -->*/}
                                <option value="15kg">15 kg</option>
                                <option value="20kg">20 kg</option>
                                <option value="50kg">50 kg</option>
                            </select>
                        </div>

                        <div className='selectitembox'>
                            <label htmlFor="gas-brands">
                                <img src={require('../../chooseimageicon.png')} alt="" />
                                <span>Set Selling Price</span>
                            </label>
                            <select name="gas-brands" id="gas-brands" size={"1"}


                            >
                                <option value="3000">3000 XAF</option>
                                <option value="4500">4500 XAF</option>
                                <option value="6000" selected>6500 XAF</option> {/*<!-- Default selected -->*/}
                                <option value="7500">7500 XAF</option>
                                <option value="10000">10000 XAF</option>
                                <option value="25000">25000 XAF</option>
                            </select>
                        </div>

                        {/*<div className='AddItemformpageinputbutton'>
                            <div className='firstchild'>
                                <label htmlFor="merchantphoto">
                                    <img src={require('../../chooseimageicon.png')} alt="" />
                                    <span>Choose photo</span>

                                </label>
                                <input type="file" name="merchantphoto" id="merchantphoto" />
                            </div>

                        </div>*/}
                    </div>
                </div>



            </div >

            <div className='AddItemformppagefooter'>
                <button type="AddItem" >Add bottle</button>
            </div>

        </div >
    )
}

export default MerchantAddItemModal

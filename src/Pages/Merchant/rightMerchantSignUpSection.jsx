import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/rightMerchantSignUpSection.css';


class RightMerchantSignUpSection extends Component {
    state = {}
    render() {
        return (
            <div className='rightmerchantsignupection'>
                <form action="">
                    <div className='bbox'>

                        <div className='box'>
                            <div className='box1'>
                                <h2>Get Started</h2>
                                <p>
                                    <a href="">Already have an account?</a>
                                </p>
                            </div>
                            <div className='box2'>
                                <div className='box2item1'>
                                    <span><label htmlFor="storemapaddress">Store address</label></span>
                                    <input type="text" name="storemapaddress" id="storemapaddress" placeholder="Enter your store location (e.g., Carrefour Bastos, Yaoundé)" />
                                </div>

                                <div className='box2item1'>
                                    <span><label htmlFor="storefloorsuite">Building / Apartment (Optional)</label></span>
                                    <input type="text" name="storefloorsuite" id="storefloorsuite" placeholder='' />

                                </div>

                                <div className='box2item1'>
                                    <span><label htmlFor="storename">Store name</label></span>
                                    <input type="text" name="storename" id="storename" placeholder="Example: Rapid Gaz - Essos Market" />
                                    This is how your store will appear in the app
                                </div>



                            </div>

                        </div>

                        <div className='bbox0'>

                            <div className='box2item1'>

                                <div>
                                    <span><label htmlFor="merchantfirstname">First name</label></span>
                                    <input type="text" name="merchantfirstname" id="merchantfirstname" placeholder='' />
                                </div>

                                <div>
                                    <span><label htmlFor="merchantlastname">Last name</label></span>
                                    <input type="text" name="merchantlastname" id="merchantlastname" placeholder='' />
                                </div>

                            </div>

                            <div className='box2item1'>
                                <span><label htmlFor="merchantemail">Email</label></span>
                                <input type="text" name="merchantemail" id="merchantemail" placeholder='' />
                            </div>

                            <div className='box2item1'>

                                <div>
                                    <span><label htmlFor="merchanttelnum">Mobile phone number</label></span>
                                    <select name="telnumtypes" id="" size={"1"}>
                                        <option value="MTN" > MTN </option>
                                        <option value="Orange" selected> Orange </option>
                                        <option value=""> Camtel </option>
                                    </select>
                                </div>

                                <div>
                                    <input type="text" name="merchanttelnum" id="merchanttelnum" placeholder="" />
                                </div>

                            </div>

                        </div>


                    </div>

                    <div className='bbox0'>
                        <p>By clicking "Submit", you agree to <a href="">Gas Space Merchant Terms and Conditions </a> and <br /> acknowledge you have read the <a href="">Privacy Notice</a></p>

                        <button type="button">Submit</button>
                    </div>


                </form>
            </div>
        );
    }
}

export default RightMerchantSignUpSection;
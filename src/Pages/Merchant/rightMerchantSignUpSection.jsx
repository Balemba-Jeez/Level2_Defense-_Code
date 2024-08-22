import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/rightMerchantSignUpSection.css';


class RightMerchantSignUpSection extends Component {


    constructor(props) {
        super(props);
        this.state = {
            storemapaddress: '',
            storefloorsuite: '',
            storename: '',
            merchanfirstname: '',
            merchantlastname: '',
            merchantemail: '',
            merchanttelnum: '',
            telnumtypes: 'Orange', // Default selected value for select
            errors: {}, // To store validation errors
        };
    }

    //Method to get the various input values and update(set) accordingly

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        //console.log(event.target.value);
    }

    handleSelectChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        //console.log(event.target.value);
    }

    //Validation Function(Validate each field and update the 'errors' state)
    validateFields = () => {
        let errors = {};

        if (!this.state.storemapaddress) {
            errors.storemapaddress = "Enter a valid store address"; //Update 'errors' state with the error messages so that form can display them.

        }

        if (!this.state.storename) {
            errors.storename = "Enter a store name";
        }

        if (!this.state.merchanfirstname) {
            errors.merchantfirstname = "Enter first name";
        }

        if (!this.state.merchantlastname) {
            errors.merchantlastname = "Enter last name";
        }

        if (!this.state.merchantemail) {
            errors.merchantemail = "Enter email address";
        } else if (!/\S+@\S+\.\S+/.test(this.state.merchantemail)) {
            errors.merchantemail = "Enter a valid email address";
        }

        if (!this.state.merchanttelnum) {
            errors.merchanttelnum = "Enter phone number";
        }


        // Validate phone number based on network type
        const { merchanttelnum, telnumtypes } = this.state;
        if (!merchanttelnum) {
            errors.merchanttelnum = "Enter phone number";
        } else {
            let valid = false;
            if (telnumtypes === "MTN") {
                valid = /^(67|65|66|68)\d{7}$/.test(merchanttelnum);
                if (!valid) errors.merchanttelnum = "Looks like that MTN number isn't valid. Please try again.";
            } else if (telnumtypes === "Orange") {
                valid = /^(69|650|651|652|653)\d{7}$/.test(merchanttelnum);
                if (!valid) errors.merchanttelnum = "Looks like that Orange number isn't valid. Please try again.";
            } else if (telnumtypes === "Camtel") {
                valid = /^62\d{7}$/.test(merchanttelnum);
                if (!valid) errors.merchanttelnum = "Looks like that Camtel number isn't valid. Please try again.";
            }
        }


        this.setState({ errors });
        return Object.keys(errors).length === 0; //Returns validation status ('true' if there are no errors).
    }

    //Handle Form Submission(Prevent form submisson if validation fails and proceed if all fields are valid)

    handleSubmit = (event) => {
        event.preventDefault();  //Prevent Form from submitting if form has errors
        const isValid = this.validateFields();

        //check the validation status(Returns true or false)
        if (!isValid) {
            return; //Exits Function if form is invalid or validation errors exists
        }

        // Proceed with form submission or further processing
    }

    //Update Input Fields with Error States

    render() {
        return (
            <div className='rightmerchantsignupection'>
                <form action="" onSubmit={this.handleSubmit}>
                    <div className='bbox'>

                        <div className='box'>
                            <div className='box1'>
                                <h2>Get Started</h2>
                                <p>
                                    <a href="">Already have an account?</a>
                                </p>
                            </div>
                            <div className='box2'>
                                {/* Store Address */}
                                <div className='box2item1'>
                                    <span><label htmlFor="storemapaddress">Store address</label></span>

                                    <input type="text" name="storemapaddress" id="storemapaddress"
                                        placeholder="Enter your store location (e.g., Carrefour Bastos, Yaoundé)"
                                        value={this.state.storemapaddress}
                                        onChange={this.handleInputChange} //Get Input Value using the event object
                                        className={this.state.errors.storemapaddress ? 'input-error' : ''}
                                    />
                                    {this.state.errors.storemapaddress && (
                                        <span className="error-message">{this.state.errors.storemapaddress}</span>
                                    )}
                                </div>

                                {/* Building / Apartment (Optional) */}
                                <div className='box2item1'>
                                    <span><label htmlFor="storefloorsuite">Building / Apartment (Optional)</label></span>
                                    <input type="text" name="storefloorsuite" id="storefloorsuite" placeholder=''
                                        value={this.state.storefloorsuite}
                                        onChange={''}
                                    />
                                </div>

                                {/* Store Name */}
                                <div className='box2item1'>
                                    <span><label htmlFor="storename">Store name</label></span>
                                    <input type="text" name="storename" id="storename" placeholder="Example: Rapid Gaz - Essos Market"
                                        value={this.state.storename}
                                        onChange={this.handleInputChange}
                                        className={this.state.errors.storemapaddress ? 'input-error' : ''}
                                    />

                                    {this.state.errors.storename ? (
                                        <span className="error-message">{this.state.errors.storename}</span>
                                    ) : (
                                        <span className="regular-text">This is how your store will appear in the app</span>
                                    )}

                                </div>



                            </div>

                        </div>

                        <div className='bbox0'>

                            {/* First and Last Name */}
                            <div className='box2item1'>

                                <div>
                                    <span><label htmlFor="merchantfirstname">First name</label></span>
                                    <input type="text" name="merchantfirstname" id="merchantfirstname" placeholder=''
                                        value={this.state.merchanfirstname}
                                        onChange={this.handleInputChange}
                                        className={this.state.errors.merchantfirstname ? 'input-error' : ''}
                                    />

                                    {this.state.errors.merchantfirstname && (
                                        <span className="error-message">{this.state.errors.merchantfirstname}</span>
                                    )}
                                </div>

                                <div>
                                    <span><label htmlFor="merchantlastname">Last name</label></span>
                                    <input type="text" name="merchantlastname" id="merchantlastname" placeholder=''
                                        value={this.state.merchantlastname}
                                        onChange={this.handleInputChange}
                                        className={this.state.errors.merchantlastname ? 'input-error' : ''}
                                    />

                                    {this.state.errors.merchantlastname && (
                                        <span className="error-message">{this.state.errors.merchantlastname}</span>
                                    )}
                                </div>

                            </div>

                            {/* Email */}
                            <div className='box2item1'>
                                <span><label htmlFor="merchantemail">Email</label></span>
                                <input type="text" name="merchantemail" id="merchantemail" placeholder=''
                                    value={this.state.merchantemail}
                                    onChange={this.handleInputChange}
                                    className={this.state.errors.merchantemail ? 'input-error' : ''}
                                />

                                {this.state.errors.merchantemail && (
                                    <span className="error-message">{this.state.errors.merchantemail}</span>
                                )}
                            </div>

                            {/* Mobile phone number */}
                            <div className='box2item1'>

                                <div>
                                    <span><label htmlFor="merchanttelnum">Mobile phone number</label></span>
                                    <select name="telnumtypes" id="" size={"1"}
                                        value={this.state.telnumtypes}
                                        onChange={this.handleSelectChange}
                                    >
                                        <option value="MTN" > MTN </option>
                                        <option value="Orange" selected> Orange </option>
                                        <option value="Camtel"> Camtel </option>
                                    </select>
                                </div>

                                <div>
                                    <input type="text" name="merchanttelnum" id="merchanttelnum" placeholder=""
                                        value={this.state.merchanttelnum}
                                        onChange={this.handleInputChange}
                                        className={this.state.errors.merchanttelnum ? 'input-error' : ''}
                                    />

                                    {this.state.errors.merchanttelnum && (
                                        <span className="error-message">{this.state.errors.merchanttelnum}</span>
                                    )}
                                </div>

                            </div>

                        </div>


                    </div>

                    {/* Submit Section */}
                    <div className='bbox0'>
                        <p>By clicking "Submit", you agree to <a href="">Gas Space Merchant Terms and Conditions </a> and <br /> acknowledge you have read the <a href="">Privacy Notice</a></p>

                        <button type="submit">Submit</button>
                    </div>


                </form>
            </div>
        );
    }


}

export default RightMerchantSignUpSection;
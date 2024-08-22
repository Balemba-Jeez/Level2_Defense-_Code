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
        console.log(event.target.value);
    }

    //Validation Function(Validate each field and update the 'errors' state)
    validateFields = () => {
        let errors = {};

        if (!this.state.storemapaddress) {
            errors.storemapaddress = "store address is required"; //Update 'errors' state with the error messages so that form can display them.

        }

        if (!this.state.storename) {
            errors.storename = "Store is required";
        }

        if (!this.state.merchanfirstname) {
            errors.merchantfirstname = "First name is required";
        }

        if (!this.state.merchantlastname) {
            errors.merchantlastname = "Last name is required";
        }

        if (!this.state.merchantemail) {
            errors.merchantemail = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(this.state.merchantemail)) {
            errors.merchantemail = "Email address is invalid";
        }

        if (!this.state.merchanttelnum) {
            errors.merchanttelnum = "Mobile phone number is required";
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
    }


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

                                    <input type="text" name="storemapaddress" id="storemapaddress"
                                        placeholder="Enter your store location (e.g., Carrefour Bastos, Yaoundé)"
                                        value={this.state.storemapaddress}
                                        onChange={this.handleInputChange}
                                    />
                                </div>

                                <div className='box2item1'>
                                    <span><label htmlFor="storefloorsuite">Building / Apartment (Optional)</label></span>
                                    <input type="text" name="storefloorsuite" id="storefloorsuite" placeholder=''
                                        value={this.state.storefloorsuite}
                                        onChange={this.handleInputChange}
                                    />

                                </div>

                                <div className='box2item1'>
                                    <span><label htmlFor="storename">Store name</label></span>
                                    <input type="text" name="storename" id="storename" placeholder="Example: Rapid Gaz - Essos Market"
                                        value={this.state.storename}
                                        onChange={this.handleInputChange}
                                    />
                                    This is how your store will appear in the app
                                </div>



                            </div>

                        </div>

                        <div className='bbox0'>

                            <div className='box2item1'>

                                <div>
                                    <span><label htmlFor="merchantfirstname">First name</label></span>
                                    <input type="text" name="merchantfirstname" id="merchantfirstname" placeholder=''
                                        value={this.state.merchanfirstname}
                                        onChange={this.handleInputChange}
                                    />
                                </div>

                                <div>
                                    <span><label htmlFor="merchantlastname">Last name</label></span>
                                    <input type="text" name="merchantlastname" id="merchantlastname" placeholder=''
                                        value={this.state.merchantlastname}
                                        onChange={this.handleInputChange}
                                    />
                                </div>

                            </div>

                            <div className='box2item1'>
                                <span><label htmlFor="merchantemail">Email</label></span>
                                <input type="text" name="merchantemail" id="merchantemail" placeholder=''
                                    value={this.state.merchantemail}
                                    onChange={this.handleInputChange}
                                />
                            </div>

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
                                    />
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
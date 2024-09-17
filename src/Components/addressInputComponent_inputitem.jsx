import React, { Component } from 'react';
import '../ComponentStyles/addressInputComponent_inputitem.css';


class AddressInputComponentInputItem extends Component {

    /*state = {
        address: '', //state(variable) to hold the address
        isLoaded: false  // Holds the state for Google Maps API loading
    }

    /* handleChange = (e) => {                                     /*This method stores the client input(address) tothe local
                                                                Storage and state

        const address = e.target.value;                         /*Get user input(address) through the e(event) object when the user 
                                                                performs a change event on the input field*

        this.setState({ address });                             //Save to state

        localStorage.setItem('address', address);               //Save to local storage


    }

    handleClear = () => {                                       //This method clears the input field when clicked upon.
        this.setState({ address: '' });  // Clear state

        localStorage.removeItem('address');  // Clear localStorage
    } */

    autocomplete = null;  // Initialize autocomplete instance



    componentDidMount() {
        // Initialize Google Maps Places API for Autocomplete
        if (window.google) {
            const input = document.getElementById('autocomplete-input');
            this.autocomplete = new window.google.maps.places.Autocomplete(input);

            // Listen for the place selection event
            this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
        }
    }

    handlePlaceSelect = () => {
        // Get the place from Autocomplete and extract the address
        const place = this.autocomplete.getPlace();

        // Update the parent's state with the selected address
        if (place && place.formatted_address) {
            this.props.onAddressSelect(place.formatted_address); // Call parent's handler
        }
    }




    render() {


        return (
            <div className='addressinputcomponent_inputitem'>
                <img src={require('../locationicon.png')} alt="GPS icon" />
                <div className='addressinputcomponent_rightinputitem'>
                    <input id='autocomplete-input'  // Add id to reference input for Autocomplete
                        type='text'
                        placeholder='Enter delivery address'
                        autoComplete='off'
                        value={this.props.address}       /*Use address from props sets the value attribute with the data gotten from the input 
                                                                                         element during onChange event(e)*/

                        //value={address}  // Use address from state

                        //onChange={this.props.onChange} // Use onChange handler from props. Adding event listener (onChange) which update state on inputchange
                        onChange={(e) => this.props.onChange(e.target.value)} // Update parent's state on change
                    />
                    <button type='button'

                        onClick={this.props.onClear} /*Adding onClick listener to clear the input field when user
                                                              click on clear button*/
                    //onClick={() => this.setState({ address: '' })}
                    >Clear</button>
                </div>


            </div>

        );
    }
}

export default AddressInputComponentInputItem;
import React, { Component } from 'react';
import '../ComponentStyles/addressInputComponent_inputitem.css'


class AddressInputComponentInputItem extends Component {
    state = {
        address: '' //state(variable) to hold the address
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



    render() {
        return (
            <div className='addressinputcomponent_inputitem'>
                <img src="locationicon.png" alt="GPS icon" />
                <div className='addressinputcomponent_rightinputitem'>
                    <input type='text' placeholder='Enter delivery address' autoComplete='off'
                        value={this.props.address}       /*Use address from props sets the value attribute with the data gotten from the input 
                                                                                     element during onChange event(e)*/


                        onChange={this.props.onChange} // Use onChange handler from props. Adding event listener (onChange) which update state on inputchange                      
                    />
                    <button type='button'

                        onClick={this.props.onClear} /*Adding onClick listener to clear the input field when user
                                                              click on clear button*/
                    >Clear</button>
                </div>
            </div>

        );
    }
}

export default AddressInputComponentInputItem;
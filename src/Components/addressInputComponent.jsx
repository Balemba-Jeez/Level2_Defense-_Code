import React, { Component } from 'react';
import AddressInputComponentInputItem from './addressInputComponent_inputitem';
import '../ComponentStyles/addressinputcomponent.css'
import { useNavigate } from 'react-router-dom';


const withRouter = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();
        return <Component navigate={navigate} {...props} />;
    };
    return Wrapper;
};

class AddressInputComponent extends Component {
    state = {

        address: "" //Initialize state to store the address

    };

    /* //Handler to update the address in state
     handleAddressChange = (e) => {
         this.setState({ address: e.target.value });
     };
 
     // Handler for the Search button click
     handleSearchClick = () => {
         const { address } = this.state;
         if (address.trim() === '') {
             // If the input is empty, stay on the same page (just return)
             //alert("Please enter a delivery address.");
             return;
         }
 
         // If the input is not empty, navigate to the next page (For now, log the action)
         //console.log("Navigating to the next page with address:", address);
         // Implement your page navigation logic here, for example using React Router
         this.props.history.push('/client/homepage');
     };*/

    ///////////////////////////////////

    // Handler to update the address in state
    /*handleAddressChange = (e) => {
        this.setState({ address: e.target.value });
        localStorage.setItem('address', e.target.value); // Update localStorage
    };*/


    // Handler to update the address in state (manual typing)
    handleAddressChange = (address) => {
        this.setState({ address });
        localStorage.setItem('address', address); // Update localStorage
    };

    // Handler when address is selected from Autocomplete
    handleAddressSelect = (address) => {
        this.setState({ address });
        localStorage.setItem('address', address); // Update localStorage
    }


    // Handler for the Search button click
    handleSearchClick = () => {
        const { address } = this.state;
        if (address.trim() === '') {
            // Stay on the same page if input is empty
            return;
        }

        // Navigate to the next page using the navigate prop
        this.props.navigate('/client/homepage');
    };

    // Handler to clear the address
    handleClear = () => {
        this.setState({ address: "" });
        localStorage.removeItem('address'); // Clear localStorage
    };


    render() {
        return (

            <div className='addressinputcomponent'>
                <AddressInputComponentInputItem

                    address={this.state.address}
                    onChange={this.handleAddressChange} // Handle manual input
                    onAddressSelect={this.handleAddressSelect} // Handle Autocomplete selection
                    onClear={this.handleClear}

                />

                <div>
                    <button type='button' onClick={this.handleSearchClick}>Search here</button>
                </div>
            </div>
        );
    }
}

export default withRouter(AddressInputComponent);